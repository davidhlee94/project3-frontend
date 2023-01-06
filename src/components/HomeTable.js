import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

const HomeTable = ({ tableData }) => {
  return (
    <Container fluid className="table-container container-fluid">
      <Row>
        <Col className="table-trending-container">
          <h1 className="table-head">Trending</h1>
          <Table hover={true} borderless={true} responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {tableData.slice(0, 10).map((tableItem, idx) => {
                return (
                  <tr
                    key={idx}
                    onClick={() => {
                      window.location = `/nft/${tableItem._id}`;
                    }}
                    className="table-row"
                  >
                    <td>
                      <div className="table-name-container">
                        <span className="table-number">{idx + 1}</span>
                        <img
                          className="table-image"
                          src={tableItem.image}
                          alt={tableItem.assetName}
                        />
                        <h6 className="table-name">{tableItem.assetName}</h6>
                      </div>
                    </td>
                    <td className="table-price-container">
                      <h6>{tableItem.price} USD</h6>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
        <Col className="table-new-container">
          <h1 className="table-head">New NFTs</h1>
          <Table hover={true} borderless={true} responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {tableData
                .slice(tableData.length - 10, tableData.length)
                .map((tableItem, idx) => {
                  return (
                    <tr
                      key={idx}
                      onClick={() => {
                        window.location = `/nft/${tableItem._id}`;
                      }}
                      className="table-row"
                    >
                      <td>
                        <div className="table-name-container">
                          <span className="table-number">{idx + 1}</span>
                          <img
                            className="table-image"
                            src={tableItem.image}
                            alt={tableItem.assetName}
                          />
                          <h6 className="table-name">{tableItem.assetName}</h6>
                        </div>
                      </td>
                      <td className="table-price-container">
                        <h6>{tableItem.price} USD</h6>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeTable;
