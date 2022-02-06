import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CityCard from "./CityCard";
import { citiesMockData } from "../../../../database/mockData";
import { formatImportedCities } from "../../../../database/useCities";

const mockCity = formatImportedCities(citiesMockData);

export default { component: CityCard } as ComponentMeta<typeof CityCard>;

export const Primary: ComponentStory<typeof CityCard> = () => <CityCard city={mockCity[0]} />;
