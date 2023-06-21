import { state, updateState, resetState } from './model'

const billEntryForm = document.querySelector('.bill-entry-form')
const tipPercentRadioBtns = document.querySelectorAll(
    'input[name="tipPercent"]'
)
const customTipPercentInput = document.querySelector('#tip-custom')
const numberOfPeopleInput = document.querySelector('#number-of-people')
const totalPerPerson = document.querySelector('.total-per-person')
const tipAmountPerPerson = document.querySelector('.tip-amount-per-person')
const resetButton = document.querySelector('.reset-btn')

billEntryForm.addEventListener('input', (event) => {
    event.preventDefault()
    const formData = new FormData(billEntryForm)
    const newState = {
        bill: parseFloat(formData.get('bill')) || 0,
        numberOfPeople: parseInt(formData.get('numberOfPeople')) || 0,
        tipPercent:
            parseInt(formData.get('tipPercentCustom')) ||
            parseInt(formData.get('tipPercent')) ||
            5,
    }
    updateState(newState)

    if (
        typeof state.tipAmountPerPerson === 'number' &&
        typeof state.totalPerPerson === 'number'
    ) {
        resetButton.disabled = false
        tipAmountPerPerson.textContent = state.tipAmountPerPerson.toFixed(2)
        totalPerPerson.textContent = state.totalPerPerson.toFixed(2)
    }
})

tipPercentRadioBtns.forEach((radioBtn) => {
    radioBtn.addEventListener('input', () => {
        // if custom tip percent is selected, clear the tipPercentCustomInput
        customTipPercentInput.value = ''
    })
})

// if custom tip percent is receives input, clear the tipPercentRadioBtns
customTipPercentInput.addEventListener('input', () => {
    tipPercentRadioBtns.forEach((radioBtn) => {
        radioBtn.checked = false
    })
})

resetButton.addEventListener('click', () => {
    // clear all inputs
    billInput.value = ''
    tipPercentRadioBtns.forEach((radioBtn) => {
        radioBtn.checked = false
    })
    customTipPercentInput.value = ''
    numberOfPeopleInput.value = ''

    // clear all outputs
    tipAmountPerPerson.textContent = '0.00'
    totalPerPerson.textContent = '0.00'

    // reset state
    resetState()

    // disable reset button
    resetButton.disabled = true
})
