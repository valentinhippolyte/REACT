import React from "react";
import { StyleSheet, Text, StatusBar, View } from "react-native";
import { FlatList } from "react-native";
import { Card, Title, Paragraph, ActivityIndicator} from 'react-native-paper';

import { useStarships } from "../hooks/useStarships";

const FeedScreen = () => {

    const { isLoading, isError, data } = useStarships();

    if (isLoading) {
        return (
            <ActivityIndicator>Is loading</ActivityIndicator>
        )
        
    }
    if (isError) {
        return <Text>Error !!!!</Text>;
    }
    const renderItem = ({ item }) => {
        console.log({ item });
        return (
            <Card>
                <Card.Content>
                    <Title>Card title</Title>
                    <Paragraph>Card content</Paragraph>

                    <Paragraph>{item.name} </Paragraph>
                    <Paragraph>{item.model} </Paragraph>
                    <Paragraph> {item.manufacturer} </Paragraph>
                    <Paragraph> {item.cost_in_credits} </Paragraph>
                    <Paragraph> {item.length} </Paragraph>
                    <Paragraph> {item.max_atmosphering_screen} </Paragraph>
                    <Paragraph> {item.crew} </Paragraph>
                    <Paragraph> {item.passengers} </Paragraph>
                    <Paragraph> {item.cargo_capacity} </Paragraph>
                    <Paragraph> {item.consumables} </Paragraph>
                    <Paragraph> {item.hyperdrive_rating} </Paragraph>
                    <Paragraph> {item.starship_class} </Paragraph>
                </Card.Content>
            </Card>
        );
    };
    return (
        <>
            <FlatList
                data={data.results}
                renderItem={renderItem}
                keyExtractor={(props) => props.name}
            />
        </>
    );
};

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    container: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
});

export default FeedScreen;



