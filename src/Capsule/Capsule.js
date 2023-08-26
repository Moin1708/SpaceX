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

  const [limit, setLimit] = useState(7);
// The limit has been changed 
  const [offset, setOffset] = useState(8);
  const [rockets, setRocket] = useState([]);
  const [modal,setModal]=useState({

  })



  useEffect(() => {
    axios
      .get(
        `https://api.spacexdata.com/v3/ships?limit=${limit}&offset=${offset}`
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
        <h1 className="main_sec">Ships</h1>
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
                  <img alt="example" src={rocket.links?.flickr_images.mission_patch_small} height="200px"/>
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
                  <hr />
                  <p>Capsule Id: {modal.capsule_id}</p>
                  <hr />
                  <p>Capsule serial: {modal.capsule_serial}</p>
                  <hr />
                  <p>Details: {modal.details}</p>
                  <hr />
                  <p>Launch: {modal.original_launch}</p>
                  <hr />
                  <p>Launch: {modal.status}</p>
                </Modal>
      </div>
    </div>
  );
}

export default Launches;
