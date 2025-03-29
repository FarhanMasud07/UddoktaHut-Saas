import BackButton from "./BackButton";

function NoDataFound({ title, action }) {
  return (
    <div style={{ textAlign: "center", padding: "50px", fontSize: "20px" }}>
      <h2>{title}</h2>
      {action === "back" && <BackButton title="Go Back" />}
    </div>
  );
}

export default NoDataFound;
