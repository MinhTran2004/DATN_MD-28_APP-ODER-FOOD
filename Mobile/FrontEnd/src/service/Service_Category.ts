import axios from 'axios';
import {IAxiosPaginatedRespose} from '../network/IAxiosPaginatedResponse';
import {Category} from '../model/Model_Category';

class ServiceCategory {
  static url = 'http://192.168.88.137:5000/category';

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
