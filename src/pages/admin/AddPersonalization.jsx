import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Uploader from "../../components/adminComponents/addProduct/Uploader";
import BreadCumb from "../../components/adminComponents/BreadCumb";
import Button from "../../components/adminComponents/ui/Button";
import Input from "../../components/adminComponents/ui/Input";
import Label from "../../components/adminComponents/ui/Label";
import { createProductPersonalization } from "../../http/api";

const AddPersonalization = () => {
  const router = useNavigate();
  const { id } = useParams();

  const [personalizations, setPersonalizations] = useState([
    {
      id: 1,
      title: "",
      description: "",
      type: "",
      quotes: [
        {
          id: 1,
          quote: "",
          image: "",
          imageName: "",
        },
      ],
    },
  ]);
  const [requestTrack, setRequestTrack] = useState(0);

  useEffect(() => {
    if (requestTrack && requestTrack === personalizations?.length) {
      toast.success("Product Personalization Created Successfully.");
      router.push("/admin");
    }
  }, [personalizations, requestTrack, router]);

  // add new personalization
  const addNewPersonalization = () => {
    const id =
      personalizations?.length === 0
        ? 1
        : personalizations[personalizations.length - 1]?.id + 1;

    setPersonalizations([
      ...personalizations,
      {
        id,
        title: "",
        description: "",
        type: "",
        quotes: [
          {
            id: 1,
            quote: "",
            image: "",
            imageName: "",
          },
        ],
      },
    ]);
  };

  // update personalization
  const updatePersonalization = (id, name, value) => {
    const updatedPersonalizations = personalizations.map((item) => {
      if (item?.id === id) {
        item[name] = value;
        return item;
      } else {
        return item;
      }
    });

    setPersonalizations(updatedPersonalizations);
  };

  // add new quote variantion
  const addNewQuoteVariation = (personalizationId) => {
    const updatedPersonalizations = personalizations.map((item) => {
      if (item?.id === personalizationId) {
        return {
          ...item,
          quotes: [
            // eslint-disable-next-line no-unsafe-optional-chaining
            ...item?.quotes,
            {
              id: item?.quotes?.length + 1,
              quote: "",
              image: "",
              imageName: "",
            },
          ],
        };
      } else {
        return item;
      }
    });

    setPersonalizations(updatedPersonalizations);
  };

  // update quote variant state
  const changeQuoteVariant = (parentId, id, name, value) => {
    const updatedPersonalizations = personalizations.map((item) => {
      if (item?.id === parentId) {
        const updatedQuotes = item?.quotes?.map((quote) => {
          if (quote?.id === id) {
            quote[name] = value;
            return quote;
          } else {
            return quote;
          }
        });

        return {
          ...item,
          quotes: updatedQuotes,
        };
      } else {
        return item;
      }
    });

    setPersonalizations(updatedPersonalizations);
  };

  // api request
  const { mutate, isPending } = useMutation({
    mutationKey: ["createProductPersonalization"],
    mutationFn: async (info) => {
      const { data } = await createProductPersonalization(info);
      return data;
    },
    onSuccess: () => {
      setRequestTrack((prevTrack) => prevTrack + 1);
    },
  });

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    personalizations?.forEach((item) => {
      if (item?.type === "OPT") {
        const quotes = item?.quotes?.map((quote) => ({
          quote: quote?.quote,
          quote_image: [{ image: quote?.image }],
        }));

        const updatedItem = {
          title: item?.title,
          description: item?.description,
          product_item: id,
          type: item?.type,
          quote: quotes,
        };

        mutate(updatedItem);
      } else {
        mutate({
          product_item: id,
          title: item.title,
          description: item.description,
          type: item.type,
          quote: [],
        });
      }
    });
  };

  console.log("id", id);
  return (
    <div>
      <BreadCumb
        title="Create Product Personalized"
        page="Product Personalized"
      />

      <div className="mt-7 box-shadow rounded-xl p-5">
        <form onSubmit={submitHandler}>
          {/* product variations */}
          <div>
            <div>
              <div className="flex flex-col gap-5">
                {personalizations?.map((item) => (
                  <div className="flex flex-col gap-5" key={item.id}>
                    <h3 className="my-3 mt-5 text-lg border p-3 rounded-lg">
                      Product personalization: #{item?.id}
                    </h3>
                    <div className="flex flex-col gap-3">
                      <Label htmlFor={`title-${item?.id}`}>Title</Label>
                      <Input
                        id={`title-${item?.id}`}
                        value={item?.title}
                        onChange={(e) =>
                          updatePersonalization(
                            item?.id,
                            "title",
                            e.target.value
                          )
                        }
                        placeholder="Enter your personalization title"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <Label htmlFor={`description-${item?.id}`}>
                        Description
                      </Label>
                      <textarea
                        className="text-sm w-full block outline-none p-2 rounded-[7px] focus:ring-1 ring-primary bg-transparent border"
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Enter personalization details"
                        value={item?.description}
                        onChange={(e) =>
                          updatePersonalization(
                            item?.id,
                            "description",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <Label htmlFor={`type-${item?.id}`}>Type</Label>
                      <select
                        className="text-sm w-full block outline-none p-2 rounded-[7px] focus:ring-1 ring-primary bg-transparent border"
                        name=""
                        id="type-1"
                        onChange={(e) =>
                          updatePersonalization(
                            item?.id,
                            "type",
                            e.target.value
                          )
                        }
                      >
                        <option>Choose Type</option>
                        <option value="CHR">CharField</option>
                        <option value="INT">IntegerField</option>
                        <option value="OPT">ChoiceField</option>
                        <option value="IMG">ImageField</option>
                      </select>
                    </div>

                    {item?.type === "OPT" && (
                      <div>
                        <div className="flex flex-col gap-5">
                          {item?.quotes?.map((quote) => (
                            <div
                              key={quote?.id}
                              className="grid sm:grid-cols-2 gap-5"
                            >
                              <div className="flex flex-col gap-3">
                                <Label htmlFor={`quote-${quote?.id}`}>
                                  Quote
                                </Label>
                                <Input
                                  id={`quote-${quote?.id}`}
                                  value={quote?.name}
                                  onChange={(e) =>
                                    changeQuoteVariant(
                                      item?.id,
                                      quote?.id,
                                      "quote",
                                      e.target.value
                                    )
                                  }
                                  placeholder="Enter your quote"
                                />
                              </div>
                              <div className="flex flex-col gap-3">
                                <Label htmlFor={quote?.id}>
                                  Upload Quote Image
                                </Label>
                                <Uploader
                                  onChange={changeQuoteVariant}
                                  type="secondary"
                                  parentId={item?.id}
                                  id={quote?.id}
                                  htmlFor={`quote-image-${quote?.id}`}
                                  imageName={quote?.imageName}
                                />
                              </div>
                            </div>
                          ))}
                        </div>

                        <button
                          type="button"
                          className="mt-5 border rounded-lg py-2 px-4 border-primary text-primary text-sm"
                          onClick={() => addNewQuoteVariation(item?.id)}
                        >
                          Add New Quote
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="mt-5 border rounded-lg py-2 px-4 border-primary text-primary text-sm"
                onClick={addNewPersonalization}
              >
                Add New Personalization
              </button>
            </div>
          </div>

          <div className="flex justify-end mt-5 gap-3">
            <Button type="submit" loading={isPending}>
              Create Product Personalization
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPersonalization;
