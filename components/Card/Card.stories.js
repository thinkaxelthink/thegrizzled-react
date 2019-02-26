import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Card } from ".";

// move me as props in story
import { cards } from "../../data/cards";

storiesOf("Card", module).add("default", () => <Card {...cards[0]} />);
