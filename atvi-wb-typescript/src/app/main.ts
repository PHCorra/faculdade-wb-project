import ClientDelete from "../business/ClientDelete";
import clientList from "../business/clientList";
import clientRegistry from "../business/clientRegistry";
import ProductDelete from "../business/ProductDelete";
import ProductList from "../business/ProductList";
import ProductRegistry from "../business/productRegistry";
import ServiceDelete from "../business/ServiceDelete";
import ServiceList from "../business/ServiceList";
import ServiceRegistry from "../business/ServiceRegistry";
import Entry from "../io/entry";
import Enterprise from "../model/enterprise";

console.log('Seja bem-vindo ao cadastro de clientes do Grupo World Beauty');
const enterprise = new Enterprise();
let execution = true;

while (execution) {
  console.log('Opções: ');
  console.log(' 1 - Cadastrar cliente\n 2 - Listar todos os clientes\n 3 - Listar cliente especifico\n 4 - Excluir um cliente\n 5 - Cadastrar um produto\n 6 - Listar todos os produtos\n 7 - Excluir um produto \n 8 - Cadastrar um serviço\n 9 - Listar todos serviços serviço\n 10 - Excluir um serviço\n 0 - Sair');

  const entryPoint = new Entry();
  const option = entryPoint.numberInput('Escolha uma opção: ');
  const ClientList = new clientList(enterprise.getClients);
  const ClientRegister = new clientRegistry(enterprise.getClients);
  const clientDelete = new ClientDelete(enterprise.getClients);
  const ProductRegister = new ProductRegistry(enterprise.getProducts);
  const productList = new ProductList(enterprise.getProducts);
  const productDelete = new ProductDelete(enterprise.getProducts);
  const serviceRegister = new ServiceRegistry(enterprise.getServices);
  const serviceList = new ServiceList(enterprise.getServices);
  const serviceDelete = new ServiceDelete(enterprise.getServices);

  switch (option) {
    case 1:
      ClientRegister.registry();
      break;
    case 2:
      ClientList.list();
      break;
    case 3:
      ClientList.listOne();
      break;
    case 4:
      clientDelete.delete();
      break;
    // fim dos clientes
    case 5:
      ProductRegister.registry();
      break;
    case 6:
      productList.list();
      break;
    case 7:
      productDelete.delete();
      break;
    // fim dos produtos
    case 8:
      serviceRegister.registry();
      break;
    case 9:
      serviceList.list();
      break;
    case 10:
      serviceDelete.delete();
      break;
    // fim dos serviços
    case 0:
      execution = false;
      break;
    default:
      console.log('Erro');
  }
}