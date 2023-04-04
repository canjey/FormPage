import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  organizations: [],
  organizationDashboard: {
    activeServices:{

    },
    totalOrganizations:{

    },
    totalEarnings:{

    },
    newOrganizations:{

    } 
  },
  fetchOrganization: [],
  oneOrganization:[],
  organization: null,
  service:[]
};

export const counterSlice = createSlice({
  name: 'organizations',
  initialState,
  reducers: {
    setOrganizations: (state, action) => {
      state.organizations = action.payload;
    },
    setOrganizationDashboard: (state, action) => {
      state.organizationDashboard = action.payload;
    },
    deleteOrganization: (state, action) => {
      state.oneOrganization = action.payload;
    },
    fetchOneOrganization: (state, action) => {
      state.fetchOrganization = action.payload;
    },
    setOrganizationService: (state, action) => {
      state.service = action.payload;
    }

  },
});

export const {  
    setOrganizations,
    setOrganizationDashboard,
    deleteOrganization,
    fetchOneOrganization,
    setOrganizationService,
} = counterSlice.actions;


export default counterSlice.reducer;
