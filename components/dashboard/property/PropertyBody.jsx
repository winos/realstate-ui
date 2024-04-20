import Link from "next/link";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { CollapseSidebar, LeftSideMenu } from "../index";

const PropertyBody = () => {
  const [activSidebar, setActivSidebar] = useState(false);
  const [response, setResponse] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      title: formData.get("title"),
      form: formData.get("form"),
      owner: formData.get("owner"),
      description: formData.get("description"),
      shortDescription: formData.get("shortDescription"),
      type: formData.get("type"),
      image: formData.get("image"),
      pictures: formData.getAll("pictures"),
      currency: formData.get("currency"),
      postalCode: formData.get("postalCode"),
      state: formData.get("state"),
      city: formData.get("city"),
      tax: formData.get("tax"),
      priceSale: JSON.parse(formData.get("priceSale")),
      enableRental: formData.get("enableRental") === "true",
      enableSale: formData.get("enableSale") === "true",
      priceRental: JSON.parse(formData.get("priceRental")),
      priceSqare: JSON.parse(formData.get("priceSqare")),
      feeForBuyer: parseFloat(formData.get("feeForBuyer")),
      agent: formData.get("agent"),
      amenities: formData.getAll("amenities").map(id => parseInt(id)),
      plusvalia: parseFloat(formData.get("plusvalia")),
      rentabilidad: parseFloat(formData.get("rentabilidad")),
      dimension: parseFloat(formData.get("dimension")),
      address: formData.get("address"),
      acreage: parseFloat(formData.get("acreage")),
      guests: parseInt(formData.get("guests")),
      bedroom: parseInt(formData.get("bedroom")),
      beds: parseInt(formData.get("beds")),
      bathroom: parseInt(formData.get("bathroom")),
      kitchen: parseInt(formData.get("kitchen")),
      dates: formData.getAll("dates"),
      minDuration: parseInt(formData.get("minDuration")),
      maxDuration: parseInt(formData.get("maxDuration"))
    };

    try {
      const res = await fetch('http://localhost:5000/api/properties/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        const data = await res.json();
        setResponse(data.message);
      } else {
        setResponse('Error al registrar la propiedad');
      }
    } catch (error) {
      console.error('Error:', error);
      setResponse('Error al conectar con el servidor');
    }
  };

  return (
    <div className="dashboard section__space__bottom">
      <div className="container">
        <div className="dashboard__area">
          <div className="row">
            {/* @TODO: Let Side Menu */}
            <LeftSideMenu
              activSidebar={activSidebar}
              setActivSidebar={setActivSidebar}
            />

            <div className="col-xxl-9">
              <div className="main__content">
                {/* @TODO: Collapse Sidebar */}
                <CollapseSidebar setActivSidebar={setActivSidebar} />

                <div className="main__content-dashboard">
                  <div className="breadcrumb-dashboard">
                    <h5>Crea tu propiedad</h5>
                    <div>
                      <Link href="/dashboard">Home</Link>
                      <BsArrowRight />
                      <Link href="#">Property</Link>
                    </div>
                  </div>
                  <div className="withdraw-funds">
                    <div className="withdraw-funds__inner">
                      <h5>Property</h5>
                      <p>
                        Use the form below to register a property for funding
                      </p>


      <section className="">
      <div className="container">
        <div className="property-registration__area">
          <form name="property-registration__form" onSubmit={handleSubmit}>
            <div className="row">

            <div className="regi__type">
              <label htmlFor="methodSelect">Type</label>
              <div className="type__select select px-1 px-sm-3">
                <select
                  className="w-100 h-100 bg-transparent fw-semibold"
                  id="methodSelect"
                >
                  <option value="cabin"> Cabin</option>
                  <option value="apartment">Apartament</option>
                  <option value="office">Office</option>
                  <option value="hotel">Hotel</option>
                  <option value="express">American Express</option>
                </select>
              </div>
            </div>

              <div className="col-sm-6">
                <div className="input input--secondary">
                  <label htmlFor="title">Title*</label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="input input--secondary">
              <label htmlFor="description">Description*</label>
              <textarea
                name="description"
                id="description"
                rows="4"
                placeholder="Description"
              ></textarea>
            </div>
            <div className="input input--secondary">
              <label htmlFor="shortDescription">Short Description</label>
              <textarea
                name="shortDescription"
                id="shortDescription"
                rows="2"
                placeholder="Short Description"
              ></textarea>
            </div>
            <div className="row">
      
              <div className="col-sm-6">
                <div className="input input--secondary">
                  <label htmlFor="image">Image</label>
                  <input
                    type="text"
                    name="image"
                    id="image"
                    placeholder="Image URL"
                  />
                </div>
              </div>
            </div>
            <div className="input input--secondary">
              <label htmlFor="pictures">Pictures</label>
              <input
                type="file"
                name="pictures"
                id="pictures"
                multiple
              />
            </div>
            <div className="row">
            <div className="input input--secondary">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Address"
              />
            </div>

              <div className="col-sm-6">
                <div className="input input--secondary">
                  <label htmlFor="postalCode">Postal Code</label>
                  <input
                    type="number"
                    name="postalCode"
                    id="postalCode"
                    placeholder="Postal Code"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="input input--secondary">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    placeholder="State"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input input--secondary">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="City"
                  />
                </div>
              </div>
            </div>

            <div className="input input--secondary">
              <label htmlFor="priceSale">Price</label>
              <input
                type="text"
                name="priceSale"
                id="priceSale"
                placeholder="Price sale"
                required
              />
            </div>
           
            {/* <div className="input input--secondary">
              <label htmlFor="priceRental">Price Rental</label>
              <input
                type="text"
                name="priceRental"
                id="priceRental"
                placeholder="Price Rental (JSON)"
              />
            </div> */}
            <div className="input input--secondary">
              <label htmlFor="priceSqare">Price Square</label>
              <input
                type="text"
                name="priceSqare"
                id="priceSqare"
                placeholder="Price Square"
              />
            </div>
            <div className="input input--secondary">
              <label htmlFor="feeForBuyer">Fee For Buyer</label>
              <input
                type="number"
                name="feeForBuyer"
                id="feeForBuyer"
                placeholder="Fee For Buyer"
              />
            </div>
            <div className="input input--secondary">
              <label htmlFor="agent">Agent</label>
              <input
                type="number"
                name="agent"
                id="agent"
                placeholder="Agent"
              />
            </div>
            <fieldset id="amenities">

            <legend>Amenities</legend>
            <div className="input input--secondary">
            <div>
                <input
                  type="checkbox"
                  id="wifi"
                  name="amenities"
                  value="Wifi"
                />
                <label htmlFor="wifi">Wifi</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="internet"
                  name="amenities"
                  value="Internet"
                />
                <label htmlFor="internet">Internet</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="tv"
                  name="amenities"
                  value="TV"
                />
                <label htmlFor="tv">TV</label>
              </div>
            </div>

                </fieldset>
            <div className="input input--secondary">
              <label htmlFor="plusvalia">Plusvalia</label>
              <input
                type="number"
                name="plusvalia"
                id="plusvalia"
                placeholder="Plusvalia"
              />
            </div>
            <div className="input input--secondary">
              <label htmlFor="rentabilidad">Rentabilidad</label>
              <input
                type="number"
                name="rentabilidad"
                id="rentabilidad"
                placeholder="Rentabilidad"
              />
            </div>
            <div className="input input--secondary">
              <label htmlFor="dimension">Dimension</label>
              <input
                type="number"
                name="dimension"
                id="dimension"
                placeholder="Dimension"
              />
            </div>
            
            <div className="input input--secondary">
              <label htmlFor="acreage">Acreage</label>
              <input
                type="number"
                name="acreage"
                id="acreage"
                placeholder="Acreage"
              />
            </div>
            
            <div className="input input--secondary">
              <label htmlFor="bedroom">Bedroom</label>
              <input
                type="number"
                name="bedroom"
                id="bedroom"
                placeholder="Bedroom"
              />
            </div>
            <div className="input input--secondary">
              <label htmlFor="beds">Beds</label>
              <input
                type="number"
                name="beds"
                id="beds"
                placeholder="Beds"
              />
            </div>
            <div className="input input--secondary">
              <label htmlFor="bathroom">Bathroom</label>
              <input
                type="number"
                name="bathroom"
                id="bathroom"
                placeholder="Bathroom"
              />
            </div>
            <div className="input input--secondary">
              <label htmlFor="kitchen">Kitchen</label>
              <input
                type="number"
                name="kitchen"
                id="kitchen"
                placeholder="Kitchen"
              />
            </div>
            {/* <div className="input input--secondary">
              <label htmlFor="dates">Dates</label>
              <input
                type="date"
                name="dates"
                id="dates"
                multiple
              />
            </div> */}
            {/* <div className="input input--secondary">
              <label htmlFor="minDuration">Minimum Duration</label>
              <input
                type="number"
                name="minDuration"
                id="minDuration"
                placeholder="Minimum Duration"
              />
            </div> */}
            {/* <div className="input input--secondary">
              <label htmlFor="maxDuration">Maximum Duration</label>
              <input
                type="number"
                name="maxDuration"
                id="maxDuration"
                placeholder="Maximum Duration"
              />
            </div> */}
            <div className="input__button">
              <button type="submit" className="button button--effect">
                Register Property
              </button>
            </div>
          </form>
          {response && <p>{response}</p>}
        </div>
      </div>
    </section>


                      {/* <form>
                        <div className="input input--secondary">
                          <label htmlFor="withdrawAmount">Amount</label>
                          <input
                            type="number"
                            name="withdraw_amount"
                            id="withdrawAmount"
                            placeholder="100"
                            required="required"
                          />
                        </div>
                        <button type="submit" className="button button--effect">
                          Withdraw
                        </button>
                      </form> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyBody;
