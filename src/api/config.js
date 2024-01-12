//Have to use env variable to get the api url
console.log(import.meta.env.VITE_BACKEND_URL)
export const userRoutes = {
    getUser: `${import.meta.env.VITE_BACKEND_URL}/user`,
}

export const authRoutes = {
    loginRoute: `${import.meta.env.VITE_BACKEND_URL}/auth`,
    forgetPasswordRoute: `${import.meta.env.VITE_BACKEND_URL}/auth/forgetPassword`
}

export const branchRoutes = {
    getBranches: `${import.meta.env.VITE_BACKEND_URL}/branch`,
}

export const companyRoutes = {
    getCompanyInfo: `${import.meta.env.VITE_BACKEND_URL}/company`,
}

export const indicatorRoutes = {
    getIndicators: `${import.meta.env.VITE_BACKEND_URL}/indicator/`, //:branch
    registerIndicators: `${import.meta.env.VITE_BACKEND_URL}/indicator/register`,
    getIndicatorValues: `${import.meta.env.VITE_BACKEND_URL}/indicator/values`
}

export const inputDatsRoutes = {
    getInputDats: `${import.meta.env.VITE_BACKEND_URL}/inputDat`,
    registerInputDats: `${import.meta.env.VITE_BACKEND_URL}/inputDat`,
    getInputDatsByIndicator: `${import.meta.env.VITE_BACKEND_URL}/inputDat/byIndicator`,
    updateInputDats: `${import.meta.env.VITE_BACKEND_URL}/inputDat/update`,
    registerInputDatsMany: `${import.meta.env.VITE_BACKEND_URL}/inputDat/many/`,
    getIndicatorsByBranch: `${import.meta.env.VITE_BACKEND_URL}/indicator`
}