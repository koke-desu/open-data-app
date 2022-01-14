import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CityCard from "./CityCard";
import { citiesMockData } from "../../../../database/mockData";

const mockCity = citiesMockData[0];

export default { component: CityCard } as ComponentMeta<typeof CityCard>;

export const Primary: ComponentStory<typeof CityCard> = () => <CityCard city={mockCity} />;
