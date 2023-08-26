import React, { useState, useEffect } from "react";
import Header from "../Home/Header";
import axios from "axios";
import { Card } from "antd";
import { Button, Space } from "antd";
import { useNavigate } from "react-router-dom";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import {  Modal } from 'antd';

const { Meta } = Card;

function Launches() {
  const navigate = useNavigate();

  const [limit, setLimit] = useState(6);

  const [offset, setOffset] = useState(8);
  const [rockets, setRocket] = useState([]);
  const [modal,setModal]=useState({

  })



  useEffect(() => {
    axios
      .get(
        `https://api.spacexdata.com/v3/launches?limit=${limit}&offset=${offset}`
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
        <h1 className="main_sec">Launches</h1>
      <div className="row">
        {rockets.map((rocket) => {
          return (
            <div class="col-3">
              <Card
                hoverable
                style={{
                  width: "80%",
                }}
                className="m2"
                cover={
                  <img alt="example" src={rocket.links?.mission_patch_small} height="200px"/>
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
                  {/* <p>Mission Name: {modal.mission_name}</p> */}
                  <hr />
                  <p>Ships: {modal.ships}</p>
                  <hr />
                  <p>Launch success: {modal.launch_success}</p>
                  <hr />
                  <p>Flight Number: {modal.flight_number}</p>
                  <hr />
                  <p>Launch Date: {modal.launch_date_utc}</p>
                  <hr />
                  <p>First Flight: {modal.first_flight}</p>
                  <hr />
                   
                </Modal>
      </div>
    </div>
  );
}

export default Launches;
