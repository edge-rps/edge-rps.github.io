import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Package.module.css";

export function Package({
  as: _Component = _Builtin.Block,
  pricingHeadingPrice = "$210 /mo",
  pricingHeadingSlot,
}) {
  return (
    <_Component className={_utils.cx(_styles, "pricing-block")} tag="div">
      <_Builtin.Heading
        className={_utils.cx(_styles, "heading-5", "pricing")}
        tag="h5"
      >
        {"Three-month payment"}
      </_Builtin.Heading>
      <_Builtin.Paragraph className={_utils.cx(_styles, "body")}>
        {"Lorem ipsum doler sit amet conseauris volutpat elit sed tellus."}
      </_Builtin.Paragraph>
      <_Builtin.Heading
        className={_utils.cx(_styles, "pricing-heading")}
        tag="h1"
      >
        {pricingHeadingSlot ?? pricingHeadingPrice}
      </_Builtin.Heading>
      <_Builtin.Link
        className={_utils.cx(
          _styles,
          "button-2",
          "full-width",
          "margin-top-20"
        )}
        button={true}
        options={{
          href: "#",
        }}
      >
        {"Enroll Now"}
      </_Builtin.Link>
      <_Builtin.Grid
        className={_utils.cx(_styles, "checkmarks-grid")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "checkmark-row")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "checkmark-icon")}
            loading="lazy"
            width="auto"
            height="auto"
            src="https://assets.website-files.com/61ba235336756ff1c0fb7f9b/61ba235336756f5884fb7fa8_checkbox-btn-checked%201.svg"
          />
          <_Builtin.Paragraph
            className={_utils.cx(
              _styles,
              "body-text",
              "dark",
              "bold",
              "no-margin"
            )}
          >
            {"Lorem ipsum doler sit amet"}
          </_Builtin.Paragraph>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "checkmark-row")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "checkmark-icon")}
            loading="lazy"
            width="auto"
            height="auto"
            src="https://assets.website-files.com/61ba235336756ff1c0fb7f9b/61ba235336756f5884fb7fa8_checkbox-btn-checked%201.svg"
          />
          <_Builtin.Paragraph
            className={_utils.cx(
              _styles,
              "body-text",
              "dark",
              "bold",
              "no-margin"
            )}
          >
            {"Conseauris volutpat elit sed"}
          </_Builtin.Paragraph>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "checkmark-row")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "checkmark-icon")}
            loading="lazy"
            width="auto"
            height="auto"
            src="https://assets.website-files.com/61ba235336756ff1c0fb7f9b/61ba235336756f5884fb7fa8_checkbox-btn-checked%201.svg"
          />
          <_Builtin.Paragraph
            className={_utils.cx(
              _styles,
              "body-text",
              "dark",
              "bold",
              "no-margin"
            )}
          >
            {"Lorem ipsum doler sit amet"}
          </_Builtin.Paragraph>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "checkmark-row")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "checkmark-icon")}
            loading="lazy"
            width="auto"
            height="auto"
            src="https://assets.website-files.com/61ba235336756ff1c0fb7f9b/61ba235336756f5884fb7fa8_checkbox-btn-checked%201.svg"
          />
          <_Builtin.Paragraph
            className={_utils.cx(
              _styles,
              "body-text",
              "dark",
              "bold",
              "no-margin"
            )}
          >
            {"Conseauris volutpat elit sed"}
          </_Builtin.Paragraph>
        </_Builtin.Block>
      </_Builtin.Grid>
    </_Component>
  );
}
