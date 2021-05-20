export const SET_COMPANIES = 'SET_COMPANIES';
export const SET_ACTIVE_COMPANY = 'SET_ACTIVE_COMPANY';
export const SET_SERVER_RESPONSE= 'SET_SERVER_RESPONSE';
const initialState = {
    companies: [],
    selectedCompany : {},
}

const companyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMPANIES:
            return {
                ...state,
                companies: [...action.companies]
            }
        case SET_ACTIVE_COMPANY:
            return {
                ...state,
                selectedCompany: action.company,
            }
        default:
            return {
                ...state
            }
    }
}
export default companyReducer;