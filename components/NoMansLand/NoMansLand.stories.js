import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { NoMansLand } from ".";

// move me as props in story
import { cards } from "../../data/cards";

storiesOf("No Mans Land", module).add("default", () => (
  <NoMansLand cards={cards} />
));
