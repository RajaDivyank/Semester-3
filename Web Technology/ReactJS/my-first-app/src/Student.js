import { useState } from "react";

export default function Student(propes) {
  const stu = [
    {
      createdAt: "2022-08-04T12:07:14.676Z",
      name: "Mr. Toby Ledner",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/91.jpg",
      department: "Tools",
      roll_no: "125f7f2a-6149-44ef-a9ec-16ef5e0c43b6",
      city: "East Terrance",
      password: "64LwiwMltZNh_Yh",
      username: "Troy.Breitenberg43",
      id: "1",
    },
    {
      createdAt: "2022-08-05T01:50:02.158Z",
      name: "Lucille Frami",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1020.jpg",
      department: "Games",
      roll_no: "04f1b64b-672d-4137-a3d4-de5d55683541",
      city: "Olsonland",
      password: "wzRmqYiPRXXXOZ8",
      username: "Wilbert_Lesch",
      id: "2",
    },
    {
      createdAt: "2022-08-04T18:27:28.044Z",
      name: "Billie Gleichner",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/155.jpg",
      department: "Garden",
      roll_no: "dc6b7072-6741-489e-915e-fec2d4700a72",
      city: "Port Casandrastad",
      password: "QGLqc9jdaeQIMuL",
      username: "Domingo.Yundt",
      id: "3",
    },
    {
      createdAt: "2022-08-04T15:37:47.825Z",
      name: "Terri Hilpert",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/56.jpg",
      department: "Home",
      roll_no: "051a5705-7d36-45c0-bc05-7067e22a9198",
      city: "Lake Bailey",
      password: "uad3XOO88CdOE0p",
      username: "Lafayette.Murazik59",
      id: "4",
    },
    {
      createdAt: "2022-08-04T20:49:09.887Z",
      name: "Ms. Alberta Rau",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/482.jpg",
      department: "Tools",
      roll_no: "e7534fd3-b00a-4b6e-b20a-15cff39586e5",
      city: "Nyatown",
      password: "xfKNvvxzC6NI6xu",
      username: "Loyce42",
      id: "5",
    },
    {
      createdAt: "2022-08-04T10:23:46.118Z",
      name: "Miss Naomi McDermott",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/659.jpg",
      department: "Tools",
      roll_no: "6bec7b12-e0c8-4faa-be88-5616a23038d6",
      city: "Port Urielburgh",
      password: "czqwcwtT1JXFbMW",
      username: "Ashleigh40",
      id: "6",
    },
    {
      createdAt: "2022-08-04T23:37:11.630Z",
      name: "Dewey Zboncak",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1007.jpg",
      department: "Jewelery",
      roll_no: "31e7003a-05fc-41ca-beb3-d10f9215078f",
      city: "Rossshire",
      password: "DnVokU1dZb99qjT",
      username: "Chad.Schuster",
      id: "7",
    },
    {
      createdAt: "2022-08-04T14:44:26.208Z",
      name: "Stephanie Kohler",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/43.jpg",
      department: "Kids",
      roll_no: "8d5810c7-0f36-47d7-9e55-4a1ddaf0c664",
      city: "Cortneybury",
      password: "GYZE1PH3ygM2Xa3",
      username: "Myron.Rowe4",
      id: "8",
    },
    {
      createdAt: "2022-08-04T09:32:14.063Z",
      name: "Henry Streich",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/164.jpg",
      department: "Movies",
      roll_no: "bec6b4a2-2bcb-46e2-b380-1d5e56dfde99",
      city: "North Mariah",
      password: "9twrna3Rv0p3ouo",
      username: "Ora_Wisoky",
      id: "9",
    },
    {
      createdAt: "2022-08-04T10:27:26.149Z",
      name: "Charlotte Stracke II",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1219.jpg",
      department: "Books",
      roll_no: "8dd161b4-2dbc-436e-a0b6-4204b7d9cc08",
      city: "Gerlachfurt",
      password: "WtM3UvMIGN0PD_5",
      username: "Juliana64",
      id: "10",
    },
    {
      createdAt: "2022-08-04T10:53:43.296Z",
      name: "Victor Gaylord",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1102.jpg",
      department: "Movies",
      roll_no: "54732553-9fe4-4f67-82f0-96be8dce7733",
      city: "South Jarrett",
      password: "bY9bvE4Lsd7AZ6t",
      username: "June77",
      id: "11",
    },
    {
      createdAt: "2022-08-04T06:23:34.065Z",
      name: "Ismael Bartoletti",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/263.jpg",
      department: "Jewelery",
      roll_no: "2d6af026-5d85-4935-81fa-eac8f363a9e6",
      city: "Filibertofort",
      password: "SkSb79GHBIzIZBF",
      username: "Eduardo.Bergstrom1",
      id: "12",
    },
    {
      createdAt: "2022-08-04T05:59:40.097Z",
      name: "Irvin Wilderman",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/860.jpg",
      department: "Clothing",
      roll_no: "173e876d-109e-4aa3-bc09-25bc9a8c5c38",
      city: "Port Clydeshire",
      password: "xsFmOZ0JdewGvzn",
      username: "Haylie_Kiehn59",
      id: "13",
    },
    {
      createdAt: "2022-08-04T12:52:06.238Z",
      name: "Janie Jones",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/592.jpg",
      department: "Grocery",
      roll_no: "0229a7a4-3601-4c4e-b818-769fef9fe2b0",
      city: "Fort Madalynstead",
      password: "bfj8TvA5FevqeNA",
      username: "Nathan.Kuphal",
      id: "14",
    },
    {
      createdAt: "2022-08-04T23:44:12.552Z",
      name: "Robyn O'Connell DDS",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1152.jpg",
      department: "Home",
      roll_no: "355f36ff-986e-445e-becb-da9a9e441a32",
      city: "Sashaworth",
      password: "TMry3oefMlqIhsg",
      username: "Larry.Funk",
      id: "15",
    },
    {
      createdAt: "2022-08-04T07:39:28.031Z",
      name: "Mrs. Faye Schaefer",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/972.jpg",
      department: "Jewelery",
      roll_no: "75e01d16-05b4-40bc-b738-885853e85909",
      city: "North Katelynn",
      password: "tYR5dOyYX6MI1Zg",
      username: "Shannon1",
      id: "16",
    },
    {
      createdAt: "2022-08-04T07:04:59.714Z",
      name: "Al Botsford",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1055.jpg",
      department: "Health",
      roll_no: "763f0fda-66ae-47e9-b275-b63bb6981041",
      city: "Newark",
      password: "n0RMwvwRK1qCPdr",
      username: "Antone_Marks",
      id: "17",
    },
    {
      createdAt: "2022-08-04T13:39:01.834Z",
      name: "Clark O'Conner PhD",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/73.jpg",
      department: "Toys",
      roll_no: "90a7f1b1-6efc-4ab4-bf2d-179bece18efc",
      city: "Strosinbury",
      password: "h9Cr_RqjPZzka0t",
      username: "Kenna.Kuhic29",
      id: "18",
    },
    {
      createdAt: "2022-08-04T17:37:48.431Z",
      name: "Kerry Hudson DDS",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/265.jpg",
      department: "Industrial",
      roll_no: "d7102dda-ab59-46fc-84da-79469f55934b",
      city: "Morarborough",
      password: "pKukaBMnI2Os80r",
      username: "Mafalda_Bogan26",
      id: "19",
    },
    {
      createdAt: "2022-08-05T00:49:10.579Z",
      name: "Carl Zieme",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/226.jpg",
      department: "Tools",
      roll_no: "f385cf35-b6b0-467a-be55-a5feb696e36c",
      city: "Arlington",
      password: "U11QPwFBuABHwDx",
      username: "Trace76",
      id: "20",
    },
  ];
  const [fac, setFac] = useState(stu);
  function Delete(index) {
    var temp = [...fac];
    temp.splice(index, 1);
    setFac(temp);
  }
  const fire = fac.map((s, index) => {
    return (
      <>
        <div
          style={{
            border: "2px solid black",
            float: "left",
            height: "310px",
            width: "23%",
            margin: "10px",
            backgroundColor: "#F64C72",
          }}
        >
          <tr>
            <td
              style={{
                textAlign: "center",
              }}
            >
              <img src={s.avatar} />
            </td>
          </tr>
          <tr>
            <td
              style={{
                textAlign: "center",
              }}
            >
              {" "}
              Name : {s.name}{" "}
            </td>
          </tr>
          <tr>
            <td
              style={{
                textAlign: "center",
              }}
            >
              {" "}
              Department : {s.department}{" "}
            </td>
          </tr>
          <tr>
            <td
              style={{
                textAlign: "center",
              }}
            >
              {" "}
              roll_no : {s.roll_no}{" "}
            </td>
          </tr>
          <tr>
            <td
              style={{
                textAlign: "center",
              }}
            >
              {" "}
              City : {s.city}{" "}
            </td>
          </tr>
          <tr>
            <td
              style={{
                textAlign: "center",
              }}
            >
              {" "}
              Password : {s.password}{" "}
            </td>
          </tr>
          <tr>
            <td
              style={{
                textAlign: "center",
              }}
            >
              {" "}
              Username : {s.username}{" "}
            </td>
          </tr>
          <tr>
            <td
              style={{
                textAlign: "center",
              }}
            >
              {" "}
              ID : {s.id}{" "}
            </td>
          </tr>
          <tr>
            <td>
              <button
                onClick={() => {
                  Delete(index);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        </div>
      </>
    );
  });
  return fire;
}
