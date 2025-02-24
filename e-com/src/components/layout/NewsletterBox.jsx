export const NewsletterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="nb_1">
      <p className="nb_2">Subscribe Now & Get 20% off</p>
      <p className="nb_3">
        Enter your Email to receive the latest updates, exclusive offers, and
        insightful content straight to your inbox!
      </p>
      <form onSubmit={onSubmitHandler} className="nb_c">
        <input
          className="nb_4"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button className="nb_5">SUBSCRIBE</button>
      </form>
    </div>
  );
};
