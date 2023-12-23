import React, { Component } from "react";
import { Card, Table, Tooltip, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import AvatarStatus from "components/shared-components/AvatarStatus";
import { getClients } from "services/JSONPlaceholder";
import { getAdaptiveClients } from "adapters/adapters";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class ClientList extends Component {
  state = {
    clients: [],
  };

  componentDidMount = async () => {
    const clients = await getClients();
    console.log(clients);
    const adaptiveClients = getAdaptiveClients(clients);

    this.setState({
      clients: adaptiveClients,
    });
  };

  render() {
    const { clients } = this.state;

    const tableColumns = [
      {
        title: "Client",
        dataIndex: "name",
        render: (_, record) => (
          <div className="d-flex">
            <AvatarStatus
              src={record.img}
              name={record.name}
              subTitle={record.email}
            />
          </div>
        ),
        sorter: {
          compare: (a, b) => {
            a = a.name.toLowerCase();
            b = b.name.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: "Address",
        dataIndex: "address",
        sorter: {
          compare: (a, b) => {
            a = a.address.toLowerCase();
            b = b.address.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: "Phone",
        dataIndex: "phone",
      },
      {
        title: "Company",
        dataIndex: "company",
        sorter: {
          compare: (a, b) => {
            a = a.company.toLowerCase();
            b = b.company.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: "",
        dataIndex: "actions",
        render: (_, elm) => (
          <div className="text-right">
            <Tooltip title="Edit">
              <Link to={`edit-client/${elm.id}`} style={{ color: "white" }}>
                Редактировать
                <Button
                  type="primary"
                  className="mr-2"
                  icon={<EditOutlined />}
                  size="middle"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Редактировать
                </Button>
              </Link>
            </Tooltip>
          </div>
        ),
      },
    ];

    return (
      <Card bodyStyle={{ padding: "0px" }}>
        <Table columns={tableColumns} dataSource={clients} rowKey="id" />
      </Card>
    );
  }
}

export { ClientList };
