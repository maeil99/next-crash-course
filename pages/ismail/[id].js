export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();

  const paths = data.map((ismail) => {
    return {
      params: { id: ismail.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);

  const data = await res.json();

  return {
    props: { ismail: data },
  };
};

const Details = ({ ismail }) => {
  return (
    <>
      <h1>{ismail.name}</h1>
      <p>{ismail.email}</p>
      <p>{ismail.website}</p>
      <p>{ismail.address.city}</p>
    </>
  );
};

export default Details;
