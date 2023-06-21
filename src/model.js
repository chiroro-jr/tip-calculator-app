export const state = {
    totalAmount: 0,
    totalPerPerson: 0,
    tipAmountPerPerson: 0,
    tipPercent: 0,
    bill: 0,
    numberOfPeople: 0,
}

export function updateBill(newBill) {
    state.bill = newBill < 0 ? 0.0 : newBill
    updateTipAmountPerPerson()
    updateTotalPerPerson()
}

export function updateTipPercent(newTipPercent) {
    state.tipPercent = newTipPercent < 0 ? 0 : newTipPercent
    updateTipAmountPerPerson()
    updateTotalPerPerson()
}

export function updateNumberOfPeople(newNumberOfPeople) {
    state.numberOfPeople = newNumberOfPeople < 0 ? 0.0 : newNumberOfPeople
    updateTipAmountPerPerson()
    updateTotalPerPerson()
}

export function updateTotalAmount(newTotal) {
    state.totalAmount = newTotal
}

export function updateTipAmountPerPerson() {
    const tipAmount = (state.bill * state.tipPercent) / 100
    const totalAmount = state.bill + tipAmount
    const tipAmountPerPerson =
        state.numberOfPeople === 0 ? 0 : tipAmount / state.numberOfPeople
    state.tipAmountPerPerson = tipAmountPerPerson
    updateTotalAmount(totalAmount)
}

export function updateTotalPerPerson() {
    const totalPerPerson =
        state.numberOfPeople === 0
            ? 0
            : state.totalAmount / state.numberOfPeople

    state.totalPerPerson = totalPerPerson
}

export function resetState() {
    updateBill(0)
    updateTipPercent(0)
    updateNumberOfPeople(0)
}

export function updateState(newState) {
    updateBill(newState.bill)
    updateTipPercent(newState.tipPercent)
    updateNumberOfPeople(newState.numberOfPeople)
}
