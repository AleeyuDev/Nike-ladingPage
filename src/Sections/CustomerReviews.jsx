import ReviweCard from "../componenets/ReviweCard";
import reviews from "../constant/index";

const CustomerReviews = () => {
  return (
    <section className="max-container ">
      <h3 className="font-palanquin   text-center text-4xl font-bold">
        What Our<span className=" text-green-800">Customer </span>
        Say?
      </h3>
      <p className="font-montserrat text-slate-gray text-lg leading-7 m-auto mt-4 max-w-lg text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi labore
        commodi, voluptates unde asperiores eligendi et vero, quasi facere rerum
        consectetur officia! Perspiciatis, vero esse.
      </p>
      <div className="mt-24 flex flex-1 justify-envenly items-center max-lg:flex-col gap-14 ">
        {reviews.map(
          (review, idx) => (
            console.log(review),
            (
              <ReviweCard
                key={idx}
                imgURL={review.imgURL}
                customerName={review.customerName}
                feedback={review.feedback}
                rating={review.rating}
              />
            )
          )
        )}
      </div>
    </section>
  );
};

export default CustomerReviews;
