import React from "react";
import { connect } from "react-redux";
import LegendItem from "./LegendItem";

const LegendEditor = (props) => <div>{props.legendItems.map(item => <LegendItem key={item.id} />)}</div>;

const mapStateToProps = (state) => {
  return {
    legendItems: state.legendItem,
  };
};

export default connect(mapStateToProps)(LegendEditor);
