//Have to use env variable to get the api url

export const userRoutes = {
    getUser: 'http://localhost:5000/user',
}

export const authRoutes = {
    loginRoute: 'http://localhost:5000/auth',
    forgetPasswordRoute: 'http://localhost:5000/auth/forgetPassword'
}

export const branchRoutes = {
    getBranches: 'http://localhost:5000/branch',
    getIndicators: 'http://localhost:5000/branch/indicators/',
}

export const companyRoutes = {
    getCompanyInfo: 'http://localhost:5000/company',
}

export const indicatorRoutes = {
    getIndicators: 'http://localhost:5000/indicator',
    registerIndicators: 'http://localhost:5000/indicator/register',
    getIndicatorValues: 'http://localhost:5000/indicator/values'
}

export const inputDatsRoutes = {
    getInputDats: 'http://localhost:5000/inputDat',
    registerInputDats: 'http://localhost:5000/inputDat',
    getInputDatsByIndicator: 'http://localhost:5000/inputDat/byIndicator',
    updateInputDats: 'http://localhost:5000/inputDat/update',
    registerInputDatsMany: 'http://localhost:5000/inputDat/many/',
    getIndicatorsByBranch: 'http://localhost:5000/indicator'
}