//Have to use env variable to get the api url

export const userRoutes = {
    getUser: 'http://localhost:5000/api/users',
}

export const branchRoutes = {
    getBranches: 'http://localhost:5000/api/branch',
    getIndicators: 'http://localhost:5000/api/branch/indicators/',
}

export const companyRoutes = {
    getCompanyInfo: 'http://localhost:5000/api/company',
}

export const indicatorRoutes = {
    getIndicators: 'http://localhost:5000/api/indicator',
    registerIndicators: 'http://localhost:5000/api/indicator/register',
}

export const inputDatsRoutes = {
    getInputDats: 'http://localhost:5000/api/inputDat',
    registerInputDats: 'http://localhost:5000/api/inputDat'
}