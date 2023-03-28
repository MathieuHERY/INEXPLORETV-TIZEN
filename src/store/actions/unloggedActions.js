import { dataFormat, postData } from "../../mixins/formData";

export const getHomescreenAssets = () => {
  return async () => {
    try {
      const formData = dataFormat();
      const response = await postData("accueil-public.inrees", formData);
      return response;
    } catch (error) {}
  };
};
