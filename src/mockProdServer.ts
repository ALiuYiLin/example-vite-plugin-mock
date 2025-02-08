import { createProdMockServer } from 'vite-plugin-mock/client'


const modules = import.meta.glob('../mock/modules/**/*.ts',{eager:true})

const mockModules = Object.values(modules).flatMap((module:any)=>{
  return module.default || []
})


export async function setupProdMockServer() {
  createProdMockServer(mockModules)
}