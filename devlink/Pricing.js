import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { Package } from "./Package";
import * as _utils from "./utils";
import _styles from "./Pricing.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-5":{"id":"e-5","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"08f70009-a6f5-a954-2cc9-1810c33d15cf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"08f70009-a6f5-a954-2cc9-1810c33d15cf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1638399983544}},"actionLists":{"a-2":{"id":"a-2","title":"Scroll - Animation 1","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":true,"id":"61ba235336756f69fefb7f9c|2b34f636-9696-2cf8-8c66-081ccb2ea3e2"},"yValue":30,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"61ba235336756f69fefb7f9c|2b34f636-9696-2cf8-8c66-081ccb2ea3e2"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-2-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":500,"easing":"easeInOut","duration":500,"target":{"useEventTarget":true,"id":"61ba235336756f69fefb7f9c|2b34f636-9696-2cf8-8c66-081ccb2ea3e2"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":500,"easing":"easeInOut","duration":500,"target":{"useEventTarget":true,"id":"61ba235336756f69fefb7f9c|2b34f636-9696-2cf8-8c66-081ccb2ea3e2"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1638399612922}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Pricing({
  as: _Component = _Builtin.Section,
  pricingGridSlot,
  title,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "content-section", "grey")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container")}
        data-w-id="08f70009-a6f5-a954-2cc9-1810c33d15cf"
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "section-title-wrap", "centered")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading-1")}
            tag="h1"
          >
            {title ?? "Is this course right for me or my team?"}
          </_Builtin.Heading>
        </_Builtin.Block>
        <_Builtin.Grid className={_utils.cx(_styles, "pricing-grid")} tag="div">
          {pricingGridSlot ?? (
            <>
              <Package />
              <_Builtin.Block
                className={_utils.cx(_styles, "pricing-block", "recommended")}
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(_styles, "heading-5", "pricing")}
                  tag="h5"
                >
                  {"Single payment"}
                </_Builtin.Heading>
                <_Builtin.Paragraph className={_utils.cx(_styles, "body")}>
                  {
                    "Lorem ipsum doler sit amet conseauris volutpat elit sed tellus."
                  }
                </_Builtin.Paragraph>
                <_Builtin.Heading
                  className={_utils.cx(_styles, "pricing-heading")}
                  tag="h1"
                >
                  {"$420"}
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
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-4")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://assets.website-files.com/61ba235336756ff1c0fb7f9b/61ba235336756f7f20fb7fc6_Coursy-recommended_arrow.svg"
                />
              </_Builtin.Block>
            </>
          )}
        </_Builtin.Grid>
      </_Builtin.Block>
    </_Component>
  );
}
