const initialState = {
  "id": 1,
  "name": "Loadshare Networks",
  "isActive": true,
  "contactDetails": {
    "mobile": 9999999999,
    "email": "hr@loadshare.net"
  },
  "branches": [
    "Bangalore",
    "Guwahati",
    "Delhi"
  ],
  "customers": [
    {
      "name": "Flipkart",
      "active": true,
      "services": [
        "LINE_HUAL",
        "LAST_MILE"
      ]
    },
    {
      "name": "Swiggy",
      "active": true,
      "services": [
        "HYPER_LOCAL"
      ]
    },
    {
      "name": "Paytm",
      "active": true,
      "services": [
        "FIRST_MILE",
        "LINE_HUAL"
      ]
    }
  ]
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_DATA':
      let newObj = state;
      let finalData = Object.assign(newObj, {isActive: false});
      console.log(finalData);
      return finalData;
    default:
      return state
  }
}