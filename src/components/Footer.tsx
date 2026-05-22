

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />
      <section className="container pb-14 text-center">
        <h3>
          &copy; {new Date().getFullYear()} Todos los derechos reservados.
        </h3>
      </section>
    </footer>
  );
};
