import React, { useState, useEffect } from "react";
import Header from "../Home/Header";
import axios from "axios";
import { Card } from "antd";
import rimg1 from "../Home/Rimg1.webp";
import rimg2 from "../Home/Rimg2.webp";
import rimg3 from "../Home/Rimg3.jpg";
import { Divider } from "antd";
import { Button, Space } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import {  Modal } from 'antd';

const { Meta } = Card;

function Rocket() {
  const navigate = useNavigate();

  const [limit, setLimit] = useState(2);

  const [offset, setOffset] = useState(2);
  const [rockets, setRocket] = useState([]);
  const [modal,setModal]=useState({})



  useEffect(() => {
    axios
      .get(
        `https://api.spacexdata.com/v3/rockets`
        // `https://api.spacexdata.com/v3/rockets?limit=${limit}&offset=${offset}`
      )
      .then((res) => {
        setRocket(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleModal=(rocket)=>{
    setModal(rocket)
    console.log(rocket)
    setIsModalOpen(true)
  }

  return (
    <div>
      <Header />
        <h1 className="main_sec">Rockets</h1>
      <div className="row">
        {rockets.map((rocket) => {
          return (
            <div className="col-3 mb-5 mq1">
              <Card
                hoverable
                style={{
                  width: "80%",
                }}
                className="m2 "
                cover={
                  <img alt="example" src={rocket.flickr_images}height="200px"/>
                }
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <Button
                    type="primary"
                    className="d-flex align-items-center newd primary"
                    size="small"
                    onClick={()=>handleModal(rocket)}
                  >
                    Details{" "}
                  </Button>,
                  
                ]}
              >
                <Meta title={rocket.rocket_name} />
                <Meta description={rocket.description} />
              </Card>
            </div>
          );
        })}
        <Modal title={modal.rocket_name} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
                  <p>country: {modal.country}</p>
                  <hr />
                  <p>Engine Layoout: {modal.engines?.layout}</p>
                  <hr />
                  <p>Engine Propellant: {modal.engines?.propellant_1}</p>
                  <hr />
                  <p>Engine Type: {modal.engines?.type}</p>
                  <hr />
                  <p>Engine Version: {modal.engines?.version}</p>
                  <hr />
                  <p>Stages: {modal.stages}</p>
                  <hr />
                  <p>First Flight: {modal.first_flight}</p>
                  <hr />
                  <p>Cost Per Launch: {modal.cost_per_launch}</p>
                </Modal>
      </div>
    </div>
  );
}

export default Rocket;
