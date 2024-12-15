import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 280;

const menus = [
  {
    name: "삼쩜삼 앱 관리",
    list: [
      {
        name: "앱 관리",
        list: [
          "공지관리",
          "컨텐츠관리",
          "진입점 관리",
          "메인탭관리",
          "더보기 탭 관리",
        ],
      },
      {
        name: "배너 관리",
        list: ["앱", "웹"],
      },
      {
        name: "시스템 토스트 관리",
        list: ["토스트 관리"],
      },
    ],
  },
  {
    name: "종합소득세 (E/P) 관리",
    list: [
      {
        name: "자동 신고",
        list: ["Workflow 변경 작업", "알림톡 발송 작업"],
      },
      {
        name: "시스템 관리",
        list: ["스미스 신고 스케줄 관리", "자동 스케줄 관리", "일괄 메모 관리"],
      },
      {
        name: "설정 정보 관리",
        list: ["환급 서비스 설정", "앱 설정"],
      },
    ],
  },
];

export default function Nav() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        {menus.map((menu) => (
          <List key={menu.name}>
            <ListItemButton>
              <ListItemText primary={menu.name} />
            </ListItemButton>
            {menu.list.map((menu) => (
              <List key={menu.name} component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary={menu.name} />
                </ListItemButton>
                {menu.list.map((menu) => (
                  <List key={menu} component="div" disablePadding>
                    <ListItemButton sx={{ pl: 8 }}>
                      <ListItemText secondary={menu} />
                    </ListItemButton>
                  </List>
                ))}
              </List>
            ))}
          </List>
        ))}
      </Box>
    </Drawer>
  );
}
