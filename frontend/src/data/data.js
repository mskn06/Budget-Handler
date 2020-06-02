export var User = {
  username: "Santa Singh",
  password: "12345678",
  email: "santasingh@gmail.com",
  clearanceTime: "21 days",
  projectDetails: Projects,
  staffDetails: Staff,
};

export var Projects = {
  projectName: "React Project",
  deliveryDate: "20-02-2020",
  earning: "$400",
  expense: "$100",
  status: "Pending",
  staffDetails: [
    {
      staffName: "John Doe",
      amount: "$50",
      paidOn: "02-03-2020",
    },
    {
      staffName: "Johnny",
      amount: "$50",
      paidOn: "05-03-2020",
    },
  ],
};

export var Staff = {
  memberName: "John Doe",
  paid: "$100",
  earned: "$400",
  projects: "02",
  toPay: "Pending",
  projectDetails: [
    {
      projectName: "React Project",
      paid: "$50",
      earned: "$100",
      paidOn: "02-03-2020",
    },
    {
      projectName: "React Project",
      paid: "$50",
      earned: "$50",
      paidOn: "02-03-2020",
    },
  ],
};
