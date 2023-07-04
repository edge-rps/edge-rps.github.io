import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Button.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"PAGE","styleBlockIds":[],"id":"wf-page-id"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1688495817710}},"actionLists":{"a":{"id":"a","title":"New Timed Animation","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"TRANSFORM_SKEW","config":{"delay":0,"easing":"","duration":500,"target":{"id":"53e414c9-0b53-1be6-2246-787aaf60a19d"},"xValue":-60,"xUnit":"deg","yUnit":"DEG","zUnit":"DEG"}}]},{"actionItems":[{"id":"a-n-2","actionTypeId":"TRANSFORM_SKEW","config":{"delay":0,"easing":"","duration":1000,"target":{"id":"53e414c9-0b53-1be6-2246-787aaf60a19d"},"xValue":0,"xUnit":"deg","yUnit":"DEG","zUnit":"DEG"}}]}],"createdOn":1688495824791,"useFirstGroupAsInitialState":true}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Button({
  as: _Component = _Builtin.Link,
  buttonSlot,
  buttonRuntimeProps = {},
  buttonText = "Button Text yo",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "button")}
      data-w-id="53e414c9-0b53-1be6-2246-787aaf60a19d"
      button={true}
      options={{
        href: "#",
      }}
      {...buttonRuntimeProps}
    >
      {buttonSlot ?? buttonText}
    </_Component>
  );
}
