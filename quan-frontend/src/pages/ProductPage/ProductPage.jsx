import React from "react";
import { useParams } from "react-router-dom";
import CardPageClass from "./CardPage"; // Assume your class component is named CardPageClass
import ErrorBoundary from "./ErrorBoundary";
import apiClient from "api/apiClient";

function CardPageWrapper() {
  const params = useParams();

  const fetchData = async () => {
    const response = await apiClient.get("/items");
    return response.data.find((card) => card.id === parseInt(params.id, 10));
  };

  return (
    <ErrorBoundary>
      <CardPageClass params={params} fetchData={fetchData} />
    </ErrorBoundary>
  );
}

export default CardPageWrapper;
