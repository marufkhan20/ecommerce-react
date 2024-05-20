"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Uploader from "../../components/adminComponents/addProduct/Uploader";
import BreadCumb from "../../components/adminComponents/BreadCumb";
import Button from "../../components/adminComponents/ui/Button";
import Error from "../../components/adminComponents/ui/Error";
import Input from "../../components/adminComponents/ui/Input";
import Label from "../../components/adminComponents/ui/Label";
import {
  createProduct,
  getBrands,
  getCategories,
  getSizeVariants,
} from "../../http/api";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState([]);
  const [metaKeywords, setMetaKeywords] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [primaryImage, setPrimaryImage] = useState({
    image: "",
    imageName: "",
  });
  const [colorVariations, setColorVariations] = useState([
    {
      id: 1,
      name: "",
      image: "",
      imageName: "",
    },
  ]);
  const [customizeImage, setCustomizeImage] = useState({
    left: 1,
    right: 0,
    top: 1,
    bottom: 0,
    width: 40,
    height: 40,
    field_type: "IMGOPT",
  });
  const [customizeText, setCustomizeText] = useState({
    left: 0,
    right: 1,
    top: 1,
    bottom: 0,
    width: 40,
    height: 40,
    field_type: "CHR",
  });
  const [errors, setErrors] = useState({});

  const router = useNavigate();

  // get categories
  const { data: categoriesData, isLoading } = useQuery({
    queryKey: ["getCategories"],
    queryFn: async () => {
      const { data } = await getCategories();
      return data;
    },
  });

  // get brands
  const { data: brandsData, isBrandLoading } = useQuery({
    queryKey: ["getBrands"],
    queryFn: async () => {
      const { data } = await getBrands();
      return data;
    },
  });

  // get size variants
  const { data: sizeData, isSizeLoading } = useQuery({
    queryKey: ["getSizeVariants"],
    queryFn: async () => {
      const { data } = await getSizeVariants();
      return data;
    },
  });

  // select sizes handler
  const selectSizesHandler = (event) => {
    const selectedOptionsId = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );

    const sizes = [];

    sizeData?.forEach((sizeVariant) => {
      console.log("size variant", sizeVariant);
      selectedOptionsId?.forEach((item) => {
        console.log("item", item);
        if (sizeVariant.id === Number(item)) {
          console.log("selected sizeVariant", sizeVariant);
          sizes.push(sizeVariant);
        }
      });
    });

    setSize(sizes);
  };

  // add new color variantion
  const addNewColorVariation = () => {
    const id =
      colorVariations?.length === 0
        ? 1
        : colorVariations[colorVariations.length - 1]?.id + 1;

    setColorVariations([
      ...colorVariations,
      {
        id,
        name: "",
        image: "",
        imageName: "",
      },
    ]);
  };

  // update color variant state
  const changeColorVariant = (id, name, value) => {
    const updatedColorVariations = colorVariations.map((item) => {
      if (item?.id === id) {
        item[name] = value;
        return item;
      } else {
        return item;
      }
    });

    setColorVariations(updatedColorVariations);
  };

  // change customize image
  const changeCustomizeImage = (name, value) => {
    const updated = customizeImage;
    updated[name] = Number(value);
    setCustomizeImage({ ...updated });
  };

  // change customize text
  const changeCustomizeText = (name, value) => {
    const updated = customizeText;
    updated[name] = Number(value);
    setCustomizeText({ ...updated });
  };

  // create new product
  const { mutate, isPending } = useMutation({
    mutationKey: ["createProduct"],
    mutationFn: async (productDetails) => {
      const { data } = await createProduct(productDetails);
      return data;
    },
    onSuccess: (data) => {
      console.log("product data", data);
      toast.success(
        "Product created successfully. Please create prodcut personalized"
      );
      router(`/admin/add-product/add-personalization/${data?.id}`);
    },
  });

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    // check validation
    const validationErrors = {};

    if (!title) {
      validationErrors.title = "Product title is required!";
    }

    if (!price) {
      validationErrors.price = "Product price is required!";
    }

    if (!stock) {
      validationErrors.stock = "Product stock is required!";
    }

    if (!description) {
      validationErrors.description = "Product description is required!";
    }

    if (!primaryImage?.image) {
      validationErrors.primaryImage = "Product Image is required!";
    }

    if (!category) {
      validationErrors.categories = "Product category is required!";
    }

    if (Object.keys(validationErrors).length > 0) {
      return setErrors(validationErrors);
    }

    // get size variants id
    const sizeVariantsId = size?.map((item) => item.id);

    const formatedColoredVariants = colorVariations?.map((item) => {
      return {
        name: item.name,
        image: item.image,
      };
    });

    mutate({
      title,
      discount_price: discountPrice,
      current_price: price,
      quantity: stock,
      description,
      primary_image: primaryImage?.image,
      color: formatedColoredVariants,
      category,
      brand,
      size: sizeVariantsId,
      image_positioning_data: [
        {
          // fieldName: "image",
          image_position: customizeImage,
        },
        {
          // fieldName: "text",
          text_position: customizeText,
        },
      ],
      meta_description: metaDescription,
      meta_keywords: metaKeywords,
    });
  };
  return (
    <>
      <BreadCumb title="Add New Product" page="Add Product" />

      <div className="mt-7 box-shadow rounded-xl p-5">
        <form onSubmit={submitHandler}>
          <h3 className="mb-3 text-lg border p-3 rounded-lg">
            Basic Information
          </h3>
          <div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-3">
                <Label htmlFor="title">Product Title</Label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  id="title"
                  placeholder="Enter your product title"
                />
                <Error>{errors?.title}</Error>
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="price">Product Price</Label>
                <Input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  id="price"
                  placeholder="Enter your product price"
                />
                <Error>{errors?.price}</Error>
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="discountPrice">Product Discount Price</Label>
                <Input
                  value={discountPrice}
                  onChange={(e) => setDiscountPrice(e.target.value)}
                  id="discountPrice"
                  placeholder="Enter your product discount price"
                />
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="stock">Quantity</Label>
                <Input
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  id="stock"
                  placeholder="Enter your product quantity"
                />
                <Error>{errors?.stock}</Error>
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="category">Category</Label>

                <select
                  className="text-sm w-full block outline-none p-2 rounded-[7px] focus:ring-1 ring-primary bg-transparent border"
                  name=""
                  id="category"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {isLoading ? (
                    <option>Loading...</option>
                  ) : (
                    <option>Choose Categories</option>
                  )}
                  {categoriesData?.map((category) => (
                    <option key={category?.id} value={category?.id}>
                      {category?.name}
                    </option>
                  ))}
                </select>
                <Error>{errors?.categories}</Error>
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="brand">Brand</Label>

                <select
                  className="text-sm w-full block outline-none p-2 rounded-[7px] focus:ring-1 ring-primary bg-transparent border"
                  name=""
                  id="brand"
                  onChange={(e) => setBrand(e.target.value)}
                >
                  {isBrandLoading ? (
                    <option>Loading...</option>
                  ) : (
                    <option>Choose Brands</option>
                  )}
                  {brandsData?.map((brand) => (
                    <option key={brand?.id} value={brand?.id}>
                      {brand?.name}
                    </option>
                  ))}
                </select>
                <Error>{errors?.brands}</Error>
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="description">Description</Label>

                <textarea
                  className="text-sm w-full block outline-none p-2 rounded-[7px] focus:ring-1 ring-primary bg-transparent border"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Enter product details"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <Error>{errors?.description}</Error>
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="primary_image">Primary Image</Label>
                <Uploader
                  imageName={primaryImage?.imageName}
                  onChange={setPrimaryImage}
                  htmlFor="primary_image"
                />
                <Error>{errors?.primaryImage}</Error>
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="size">Product Size</Label>
                <select
                  className="text-sm w-full block outline-none p-2 rounded-[7px] focus:ring-1 ring-primary bg-transparent border"
                  name=""
                  id="size"
                  multiple
                  onChange={selectSizesHandler}
                >
                  {isSizeLoading ? (
                    <option>Loading...</option>
                  ) : (
                    <option>Choose Size</option>
                  )}
                  {sizeData?.map((size) => (
                    <option key={size?.id} value={size?.id}>
                      {size?.name}
                    </option>
                  ))}
                </select>

                {size && (
                  <ul className="flex items-center gap-2">
                    {size?.map((item) =>
                      item?.children?.length > 0 ? (
                        item?.children?.map((sizeItem) => (
                          <li
                            className="py-1.5 px-4 min-w-fit text-sm transition-all hover:bg-gray-100 block rounded-full border"
                            key={sizeItem?.id}
                          >
                            {sizeItem?.name}
                          </li>
                        ))
                      ) : (
                        <li
                          className="py-1.5 px-4 text-sm transition-all hover:bg-gray-100 min-w-fit block rounded-full border"
                          key={item?.id}
                        >
                          {item?.name}
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="keywords">Meta Keywords</Label>
                <Input
                  value={metaKeywords}
                  onChange={(e) => setMetaKeywords(e.target.value)}
                  id="keywords"
                  placeholder="Enter your product meta keywords"
                />
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="metaDescription">Meta Description</Label>

                <textarea
                  className="text-sm w-full block outline-none p-2 rounded-[7px] focus:ring-1 ring-primary bg-transparent border"
                  name=""
                  id="metaDescription"
                  cols="20"
                  rows="5"
                  placeholder="Enter product meta description"
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* customization settings */}
          {primaryImage?.image && (
            <div>
              <h3 className="my-3 mt-5 text-lg border p-3 rounded-lg">
                Customization Settings
              </h3>

              <div className="mb-4 relative w-fit overflow-hidden">
                <img src={primaryImage?.image} alt="" />
                <div
                  className={`absolute z-40`}
                  style={{
                    top: customizeImage?.top ? `${customizeImage?.top}%` : "",
                    left: customizeImage?.left
                      ? `${customizeImage?.left}%`
                      : "",
                    right: customizeImage?.right
                      ? `${customizeImage?.right}%`
                      : "",
                    bottom: customizeImage?.bottom
                      ? `${customizeImage?.bottom}%`
                      : "",
                    width: `${customizeImage?.width}%`,
                    height: `${customizeImage?.height}%`,
                  }}
                >
                  <img
                    className="w-full h-full"
                    src="/images/image-placeholder.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    top: customizeText?.top ? `${customizeText?.top}%` : "",
                    left: customizeText?.left ? `${customizeText?.left}%` : "",
                    right: customizeText?.right
                      ? `${customizeText?.right}%`
                      : "",
                    bottom: customizeText?.bottom
                      ? `${customizeText?.bottom}%`
                      : "",
                    width: `${customizeText?.width}%`,
                    height: `${customizeText?.height}%`,
                  }}
                  className="absolute z-40 w-[200px] bg-black h-[125px] flex items-center justify-center text-white text-xl"
                >
                  text
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="p-5 border rounded-lg">
                  <h4 className="mb-5">Image Customize</h4>
                  <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col gap-3">
                      <Label htmlFor="image-left">Left (%)</Label>
                      <Input
                        value={customizeImage?.left}
                        onChange={(e) =>
                          changeCustomizeImage("left", e.target.value)
                        }
                        id="image-left"
                        placeholder="%"
                        type="number"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <Label htmlFor="image-right">Right (%)</Label>
                      <Input
                        value={customizeImage?.right}
                        onChange={(e) =>
                          changeCustomizeImage("right", e.target.value)
                        }
                        id="image-right"
                        type="number"
                        placeholder="%"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <Label htmlFor="image-top">Top (%)</Label>
                      <Input
                        value={customizeImage?.top}
                        onChange={(e) =>
                          changeCustomizeImage("top", e.target.value)
                        }
                        id="image-top"
                        placeholder="%"
                        type="number"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <Label htmlFor="image-bottom">Bottom (%)</Label>
                      <Input
                        value={customizeImage?.bottom}
                        onChange={(e) =>
                          changeCustomizeImage("bottom", e.target.value)
                        }
                        id="image-bottom"
                        type="number"
                        placeholder="%"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <Label htmlFor="image-width">Width (px)</Label>
                      <Input
                        value={customizeImage?.width}
                        onChange={(e) =>
                          changeCustomizeImage("width", Number(e.target.value))
                        }
                        id="image-width"
                        type="number"
                        placeholder="pixel"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <Label htmlFor="image-height">Height (px)</Label>
                      <Input
                        value={customizeImage?.height}
                        onChange={(e) =>
                          changeCustomizeImage("height", Number(e.target.value))
                        }
                        id="image-height"
                        type="number"
                        placeholder="pixel"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-5 border rounded-lg">
                  <h4 className="mb-5">Text Customize</h4>
                  <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col gap-3">
                      <Label htmlFor="text-left">Left (%)</Label>
                      <Input
                        value={customizeText?.left}
                        onChange={(e) =>
                          changeCustomizeText("left", e.target.value)
                        }
                        id="text-left"
                        placeholder="%"
                        type="number"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <Label htmlFor="text-right">Right (%)</Label>
                      <Input
                        value={customizeText?.right}
                        onChange={(e) =>
                          changeCustomizeText("right", e.target.value)
                        }
                        id="text-right"
                        type="number"
                        placeholder="%"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <Label htmlFor="text-top">Top (%)</Label>
                      <Input
                        value={customizeText?.top}
                        onChange={(e) =>
                          changeCustomizeText("top", e.target.value)
                        }
                        id="text-top"
                        placeholder="%"
                        type="number"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <Label htmlFor="text-bottom">Bottom (%)</Label>
                      <Input
                        value={customizeText?.bottom}
                        onChange={(e) =>
                          changeCustomizeText("bottom", e.target.value)
                        }
                        id="text-bottom"
                        type="number"
                        placeholder="%"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <Label htmlFor="text-width">Width (%)</Label>
                      <Input
                        value={customizeText?.width}
                        onChange={(e) =>
                          changeCustomizeText("width", Number(e.target.value))
                        }
                        id="text-width"
                        type="number"
                        placeholder="%"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <Label htmlFor="text-height">Height (%)</Label>
                      <Input
                        value={customizeText?.height}
                        onChange={(e) =>
                          changeCustomizeText("height", Number(e.target.value))
                        }
                        id="text-height"
                        type="number"
                        placeholder="%"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* color variations */}
          <div>
            <h3 className="my-3 mt-5 text-lg border p-3 rounded-lg">
              Color Variations
            </h3>
            <div>
              <div className="flex flex-col gap-5">
                {colorVariations?.map((item) => (
                  <div key={item?.id} className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-3">
                      <Label htmlFor={`color-${item?.id}`}>Color Name</Label>
                      <Input
                        id={`color-${item?.id}`}
                        value={item?.name}
                        onChange={(e) =>
                          changeColorVariant(item?.id, "name", e.target.value)
                        }
                        placeholder="Enter your product Color"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <Label htmlFor={item?.id}>Upload Color Image</Label>
                      <Uploader
                        onChange={changeColorVariant}
                        type="secondary"
                        id={item?.id}
                        htmlFor={`color-image-${item?.id}`}
                        imageName={item?.imageName}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="mt-5 border rounded-lg py-2 px-4 border-primary text-primary text-sm"
                onClick={addNewColorVariation}
              >
                Add New Color
              </button>
            </div>
          </div>

          <div className="flex justify-end mt-5 gap-3">
            <Button type="submit" loading={isPending}>
              Create Product
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
