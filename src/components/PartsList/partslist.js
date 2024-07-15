import carParts from "@/db/parts";

const PartsList = ({ showAll, initialDisplayCount, handleShowAll }) => {
  return (
    <section className="py-2">
      <div className="container">
        <h2>Available Parts</h2>
        <ul className="d-flex flex-md-row p-0 gap-5 flex-wrap justify-content-evenly">
          {(showAll ? carParts : carParts.slice(0, initialDisplayCount)).map(
            (part, index) => (
              <li key={index}>
                <a>
                  <button className="align-items-center p-0 border border-0 card_hover">
                    <img src="https://picsum.photos/id/237/200/200" alt="" />
                    <p className="mb-0 p-3">{part}</p>
                  </button>
                </a>
              </li>
            ),
          )}
        </ul>
        {!showAll && (
          <div className="mt-3">
            <button className="btn btn-primary" onClick={handleShowAll}>
              Show All Categories
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PartsList;
