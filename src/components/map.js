import { GoogleMap,LoadScript, Marker } from "@react-google-maps/api";

const Mapcontainer = () => {
    const item = {
        name: "Location 1",
        location: {
            lat : 6.465422,
            lng : 3.406448
        }
    }


    const mapStyles = {
        height : "100vh",
        width : "100%",
    }


    const defaultCenter = {
        lat : 6.465422,
        lng : 3.406448
    }


    return (
        <div>
            <LoadScript googleMapsApiKey="AIzaSyC-9HBtGH2Tn5omz6Y4g9B29Jg5EVVx2xE">
                <GoogleMap mapContainerStyle={mapStyles} center={defaultCenter} zoom={13}>
                    <marker key={item.name} position={item.container}></marker>
                </GoogleMap>




            </LoadScript>

        </div>
    )

};

export default Mapcontainer;