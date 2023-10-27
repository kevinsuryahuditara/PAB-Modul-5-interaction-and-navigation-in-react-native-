import { Heading, Text, Center, Image, Box } from "@gluestack-ui/themed";
import { Header } from "../components";
import { useLocalSearchParams } from "expo-router";

const NewsDetail = () => {
  const params = useLocalSearchParams();
  return (
    <>
      <Header title={"News"} withBack={true} />
      <Image
        source={{ uri: params.image }}
        w="100%"
        h="25%"
        alt="Image Data"
      />
      
      <Box p={10}>
        <Text textAlign="left">{params.date}</Text>
        <Heading>Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website</Heading>
        <Box
          style={{
            width: '100%', // Panjang garis horizontal
            height: 0.4,       // Ketebalan garis (dalam piksel)
            backgroundColor: 'grey', // Warna garis
            marginVertical: 10 // Jarak vertikal dari teks di atas
          }}
        />
        <Text textAlign="left">{params.content}</Text>
      </Box>
    </>
  );
};

export default NewsDetail;