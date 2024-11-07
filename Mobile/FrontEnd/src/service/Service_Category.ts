import axios from 'axios';
import {IAxiosPaginatedRespose} from '../Network/IAxiosPaginatedResponse';
import {Category} from '../Model/Model_Category';

class ServiceCategory {
  static url = 'http://10.1.45.138:5000/category';

  static async getAll() {
    try {
      const response = await axios.get<IAxiosPaginatedRespose<Category>>(
        this.url,
      );

      return response.data.data;
    } catch (e) {
      console.log(e);
    }
  }
}

export default ServiceCategory;
