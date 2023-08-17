const initialState = {
  INsalary: 5000,
  INrental: 5000,
  INotherncomes: 0,

  // incomes end
  // propery related
  PhomeMortage: 1000,
  PpropertyTax: 5000,
  PhomeMaint: 2000,
  // homeMort: 5000,
  // propery related end

  lifeExp: 6000,
  healthExp: 2000,
  travelExp: 0,

  //  life expensive end
  loanOther: 5000,
  monthlyOther: 1000,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SALARY":
      return {
        ...state,
        INsalary: (state.INsalary = action.payload),
      };
    case "RENTAL":
      return {
        ...state,
        INrental: (state.INrental = action.payload),
      };
    case "OTHERINCOME":
      return {
        ...state,
        INotherncomes: (state.INotherncomes = action.payload),
      };

    // poperties related

    case "HOMEMORTGEAGEPAYMENT":
      return {
        ...state,
        PhomeMortage: (state.PhomeMortage = action.payload),
      };
    case "POPERTYTEXS":
      return {
        ...state,
        PpropertyTax: (state.PpropertyTax = action.payload),
      };
    case "HOMEMAINT":
      return {
        ...state,
        PhomeMaint: (state.PhomeMaint = action.payload),
      };
    // living expense

    case "LIFEEXP":
      return {
        ...state,
        lifeExp: (state.lifeExp = action.payload),
      };
    case "HEALTHEXP":
      return {
        ...state,
        healthExp: (state.healthExp = action.payload),
      };
    case "TRAVELEXP":
      return {
        ...state,
        travelExp: (state.travelExp = action.payload),
      };

    //  OTHE EXPENSIVE
    case "LOANOTHER":
      return {
        ...state,
        loanOther: (state.loanOther = action.payload),
      };
    case "MONTHLYOTHER":
      return {
        ...state,
        monthlyOther: (state.monthlyOther = action.payload),
      };

    default:
      return state;
  }
};
