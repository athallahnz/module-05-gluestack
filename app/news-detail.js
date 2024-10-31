import { Heading, Text, Image, Divider, Box } from "@gluestack-ui/themed";
import { Header } from "../components";
import { useLocalSearchParams } from "expo-router";

const NewsDetail = () => {
    const params = useLocalSearchParams();
    return (
        <>
        <Header title={"News"} withBack={true} />
        <Image
            source={{ uri: params.image }} //menampilkan Image dengan mangambil data Image dari data.js
            width="100%"
            height={200}
            resizeMode="cover"
            alt="News Image"
        />
        <Box textAlign="left" flex={1} padding={"$4"} bgColor={"#F2F2F2"}> 
            <Text paddingBottom={"$1.5"}>{params.date}</Text> 
            <Heading paddingBottom={"$1.5"} textAlign="left">{params.title}</Heading>
            <Divider className="my-1" paddingBottom={"$0.5"}/>
            <Text paddingTop={"$2"}>{params.content}</Text>
        </Box> 
        </>
    );
};

export default NewsDetail;