import React, {useState, useEffect} from 'react';
import '../styles/index.css'
import Layout from '../components/layout'
import { Input, Select, TextArea, Radio } from '../components/input';
import Logo from '../assets/Logo.png';
import { article } from '../utils/constans/article';
import Button from '../components/button';
import Table from '../components/table';
import { v4 as uuidv4 } from 'uuid';

function CreateProduct() {  
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productFreshness, setProductFreshness] = useState('');
  const [additionalDescription, setAdditionalDescription] = useState('');
  const [productPrice, setProductPrice] = useState('0');  
  const [language, setLanguage] = useState("en");
  const [products, setProducts] = useState([]);
  const [productNameError, setProductNameError] = useState('');
  const [productCategoryError, setProductCategoryError] = useState('');
  const [productImageError, setProductImageError] = useState('');
  const [productFreshnessError, setProductFreshnessError] = useState('');
  const [productPriceError, setProductPriceError] = useState('');
  const [additionalDescriptionError, setAdditionalDescriptionError] = useState('')

  const handleProductNameChange = (event) => {
    const value = event.target.value;
    setProductName(value);
    if (value.length > 25) {
      setProductNameError('Product Name must not exceed 25 characters.');
    } else {
      setProductNameError('');
    }
  };

  const handleAdditionalDescriptionChange = (e) =>{
    const value = e.target.value;
    setAdditionalDescription(value);
    if(value.length < 1){
      setAdditionalDescriptionError('Description must be field!')
    }
    else{
      setAdditionalDescriptionError('');
    }
  };
  
  const handleProductCategoryChange = (event) => {
    const value = event.target.value;
    setProductCategory(value);
    if (value.length < 1) {
      setProductCategoryError('Please select a valid Product Category.');
    } else {
      setProductCategoryError('');
    }
  };

  const handleProductImageChange = (event) => {
    const value = event.target.value;
    setProductImage(value);
    if (value === '') {
      setProductImageError('Please select an image for the product.');
    } else {
      setProductImageError('');
    }
  };

  const handleProductFreshnessChange = (event) => {
    const value = event.target.value;
    setProductFreshness(value);
    if (!value) {
      
      setProductFreshnessError('Please select product freshness.');
    } else {
      setProductFreshnessError('');
    }
  };
  
  const handleProductPriceChange = (event) => {
    const value = event.target.value;
    setProductPrice(value);
    const regex = /^\d+(\.\d)?$/;
    if (regex.test(value)) {
        setProductPriceError('');
      } else {
      
        setProductPriceError('Invalid product price. Please enter a valid number.');
    }
  };

  useEffect(() => {
    alert('Welcome');
  }, []);

function handleSubmit(event) {
  event.preventDefault();
  if (
    productName.length > 0 && 
    productCategory !== '' && 
    productImage !== '' && 
    productFreshness !== ''
    ){
    const uuID = uuidv4();
    const formattedUUID = `${uuID.slice(0, 5)}`;
    const product = {
      id: formattedUUID,
      productName: productName,
      productCategory: productCategory,
      productImage: productImage,
      productFreshness: productFreshness,
      additionalDescription: additionalDescription,
      productPrice: productPrice,
    };  

  const dupeProducts = [...products, product];
  setProducts(dupeProducts);  
  } 
  else {
  alert("Please fill in all required fields.");
  }  
}

function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 1000);
  console.log(randomNumber);
}

  return (
    <Layout>

      <img src={Logo} alt="Logo" style={{width:"4%", margin: "0 auto"}} />
      <div className='text-center' style={{margin: "20px auto"}}>
        <div className='space'>
        <h1>{article.title[language]}</h1>
        <p>{article.description[language]}</p>
        </div>

        <button 
          onClick={() => setLanguage(language == "id" ? "en" : "id")} 
          style={{backgroundColor: "grey", color: "white", borderRadius: "6px", width: "100px", height: "30px"}}>language
        </button>
        <button 
          onClick={generateRandomNumber} 
          style={{backgroundColor: "grey", color:"white", borderRadius: "6px", marginLeft: "5px", width: "150px", height:"30px"}}>Random Number
        </button>
      </div>
      
      
      <form onSubmit={handleSubmit}>
        <div className='space'>
        <Input
          label="Product Name" 
          type="text"
          defaultValue={productName}      
          onChange={handleProductNameChange}
          />
          {productNameError && (
          <p className="error-message">{productNameError}</p>
          )}
        </div>

        <div className='space'>
        <Select 
         label="Product Category"
          placeholder="Choose..."
          options={["", "Camera", "Smartphone", "Audio Equipment"]}
          defaultValue={productCategory}
          onChange={handleProductCategoryChange}
          />
          {productCategoryError && <p className="error-message">{productCategoryError}</p>}
        </div>

        <div className='space'>
        <Input 
          label="Image of Product"
          type="File"
          defaultValue={productImage}
          onChange={handleProductImageChange}
          />
          {productImageError && <p className="error-message">{productImageError}</p>}
        </div>

        <div className='space'>
        <Radio
          label="Product Freshness"
          options={["Brand New", "Second Hand", "Refurbished"]}
          value={productFreshness}
          onChange={handleProductFreshnessChange}
          />
          {productFreshnessError && <p className="error-message">{productFreshnessError}</p>}
        </div>

        <div className='space'>
        <TextArea
          label="Additional Description"
          type="text"
          defaultValue={additionalDescription}
          onChange={handleAdditionalDescriptionChange}
        />
        {additionalDescriptionError && <p className='error-message'>{additionalDescriptionError}</p>}
        </div>
        
        <div className='space'>
        <Input
          label="Product Price" 
          type="number"
          defaultValue={productPrice}
          onChange={handleProductPriceChange}
          className="productPrice"
          />
          {productPriceError && <p className="error-message">{productPriceError}</p>}
        </div>

        <div className='space'>
        <Button label="Submit" type="Submit" />
        </div>
    </form>
    
      <div className='space'>
        <b>List Product</b> 
      </div>
      <Table headers={["No/UUID", "Product Name", "Product Category", "Image Of Product","Product Freshness", "Additional Description", "Product Price", "Action"]} datas={products} />
    </Layout>
  );
}

export default CreateProduct;