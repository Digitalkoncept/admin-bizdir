import  PuffLoader from "react-spinners/PuffLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#4a63e4",
};

function Spinner() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
      <div style={{ marginBottom: '20px' }}>
        <PuffLoader
          color="#4a63e4"
          size={60}
          loading={true}
        />
      </div>
      <div style={{color:'#4a63e4',marginRight:'20px'}}>please wait</div>
    </div>
  </div>
  );
}

export default Spinner;
