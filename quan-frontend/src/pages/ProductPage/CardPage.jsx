import React from "react";
import Header from "components/Header";
import Item from "components/Item/Item";
import Footer from "components/Footer";
import ProductStyled from "./Product.styled";
import apiClient from "api/apiClient";

class CardPageClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      product: {},
      cardFound: true,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.setState({ isLoading: true });

    this.props.fetchData().then((card) => {
      if (card) {
        this.setState({ product: card, cardFound: true });
      } else {
        this.setState({ cardFound: false });
      }
      this.setState({ isLoading: false });
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextState.product !== this.state.product ||
      nextState.cardFound !== this.state.cardFound
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.product !== this.state.product) {
      console.log("Product has been updated", this.state.product);
    }
  }

  componentWillUnmount() {
    apiClient.cancelToken &&
      apiClient.cancelToken.cancel("Component unmounting");

    console.log("Component will unmount");
  }

  handleDelete = () => {
    const { id } = this.props.params;
    apiClient.delete(`/items/${parseInt(id)}`).then(() => {
      this.props.history.push("/items");
    });
  };

  render() {
    const { isLoading, product, cardFound } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (!cardFound) {
      return (
        <>
          <Header />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "10rem",
            }}
          >
            This element does not exist.
          </div>
          <Footer />
        </>
      );
    }

    return (
      <>
        <Header />
        <ProductStyled>
          <Item product={product} />
          {/* <button onClick={this.handleDelete}>Delete Item</button> */}
        </ProductStyled>
        <Footer />
      </>
    );
    // return (
    //   !isLoading && (
    //     <>
    //       <Header />
    //       <ProductStyled>
    //         <Item product={product} />
    //         <button onClick={this.handleDelete}>Delete Item</button>
    //       </ProductStyled>
    //       <Footer />
    //     </>
    //   )
    // );
  }
}

export default CardPageClass;
