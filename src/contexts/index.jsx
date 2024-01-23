import * as React from 'react';
import { AuthProvider } from './auth';



const AllContexts = ({ children }) => <AuthProvider>{children}</AuthProvider>;

export default AllContexts;
