import React from "react";
import { TextInput } from "../components/TextInput";

interface HomePageProps {

}

export const HomePage: React.FC<HomePageProps> = () => {
    return (
      <div>
        <h1>Test Page for React JS Base Setup</h1>
        <p>Test Pages</p>
        <TextInput type='text' id="text1" label="First Name" addclass="test-class" />
        <TextInput type='text' id="text2" />

      </div>
        );
    };