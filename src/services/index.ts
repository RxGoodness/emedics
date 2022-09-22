// export * from './auth';
// export * from './products';	

import {Router} from 'express'
import {authRouter} from './auth'
// import {productsRouter} from './products'

export const servicesRouter : Router = Router()

servicesRouter.use('/auth', authRouter)
// servicesRouter.use('/products', productsRouter)