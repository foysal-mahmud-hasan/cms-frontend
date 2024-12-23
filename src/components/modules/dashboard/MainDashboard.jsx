import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  rem,
  Text,
  Card,
  SimpleGrid,
  Container,
  useMantineTheme,
  List,
  ThemeIcon,
  Anchor,
  ScrollArea,
  Grid,
  NavLink,
  Box,
} from "@mantine/core";
import {
  IconGauge,
  IconUser,
  IconUsers,
  IconUsersGroup,
  IconBuildingStore,
  IconBasket,
  IconShoppingCartUp,
  IconShoppingBagSearch,
  IconCurrencyMonero,
  IconCookie,
  IconCircleDashed,
  IconHttpPost,
  IconShoppingBagPlus,
  IconCurrencyTaka,
  IconMoneybag,
  IconListDetails,
  IconCategory,
  IconCategory2,
  IconShoppingCart,
  IconShoppingBag,
  IconList,
} from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import classes from "../../../assets/css/FeaturesCards.module.css";

function MainDashboard(props) {
  const { t, i18n } = useTranslation();
  const height = props.height - 105; //TabList height 104
  const navigate = useNavigate();
  const theme = useMantineTheme();

  return (
    <>
      <Container fluid mt={"xs"}>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xs" mb={"xs"}>
          <Card shadow="md" radius="md" className={classes.card} padding="lg">
            <Grid gutter={{ base: 2 }}>
              <Grid.Col span={2}>
                <IconMoneybag
                  style={{ width: rem(42), height: rem(42) }}
                  stroke={2}
                  color={theme.colors.teal[6]}
                />
              </Grid.Col>
              <Grid.Col span={10}>
                <Text fz="md" fw={500} className={classes.cardTitle}>
                  {t("Sales&PurchaseOverview")}
                </Text>
              </Grid.Col>
            </Grid>
          </Card>
          <Card shadow="md" radius="md" className={classes.card} padding="lg">
            <Grid gutter={{ base: 2 }}>
              <Grid.Col span={2}>
                <IconMoneybag
                  style={{ width: rem(42), height: rem(42) }}
                  stroke={2}
                  color={theme.colors.blue[6]}
                />
              </Grid.Col>
              <Grid.Col span={10}>
                <Text fz="md" fw={500} className={classes.cardTitle}>
                  {t("AccountingOverview")}
                </Text>
              </Grid.Col>
            </Grid>
          </Card>
        </SimpleGrid>
        <ScrollArea h={height} scrollbarSize={2} type="never">
          <SimpleGrid cols={{ base: 1, md: 4 }} spacing="xs">
            {1 && (
              <Card
                shadow="md"
                radius="md"
                className={classes.card}
                padding="lg"
              >
                <Grid gutter={{ base: 2 }}>
                  <Grid.Col span={2}>
                    <IconBuildingStore
                      style={{ width: rem(42), height: rem(42) }}
                      stroke={2}
                      color={theme.colors.teal[6]}
                    />
                  </Grid.Col>
                  <Grid.Col span={10}>
                    <Text fz="md" fw={500} className={classes.cardTitle}>
                      {t("SalesandPurchase")}
                    </Text>
                  </Grid.Col>
                </Grid>
                <Box fz="sm" c="dimmed" mt="sm">
                  <List spacing="ms" size="sm" center>
                    <List.Item
                      pl={"xs"}
                      icon={
                        <ThemeIcon
                          color="teal.6"
                          size={20}
                          radius="xl"
                          variant="outline"
                        >
                          <IconBasket />
                        </ThemeIcon>
                      }
                    >
                      <NavLink
                        pl={"md"}
                        href="/inventory/sales"
                        label={t("Sales")}
                        component="button"
                        onClick={(e) => {
                          navigate("inventory/sales");
                        }}
                        onAuxClick={(e) => {
                          // Handle middle mouse button click for browsers that support it
                          if (e.button === 1) {
                            window.open("/inventory/sales", "_blank");
                          }
                        }}
                      />
                    </List.Item>
                    <List.Item
                      pl={"xs"}
                      icon={
                        <ThemeIcon
                          color="teal.6"
                          size={20}
                          radius="xl"
                          variant="outline"
                        >
                          <IconShoppingBagSearch />
                        </ThemeIcon>
                      }
                    >
                      <NavLink
                        pl={"md"}
                        href="/inventory/sales-invoice"
                        label={t("NewSales")}
                        component="button"
                        onClick={(e) => {
                          navigate("inventory/sales-invoice");
                        }}
                        onAuxClick={(e) => {
                          // Handle middle mouse button click for browsers that support it
                          if (e.button === 1) {
                            window.open("/inventory/sales-invoice", "_blank");
                          }
                        }}
                      />
                    </List.Item>
                    <List.Item
                      pl={"xs"}
                      icon={
                        <ThemeIcon
                          color="teal.6"
                          size={20}
                          radius="xl"
                          variant="outline"
                        >
                          <IconShoppingBagPlus />
                        </ThemeIcon>
                      }
                    >
                      <NavLink
                        pl={"md"}
                        href="/inventory/purchase"
                        label={t("Purchase")}
                        component="button"
                        onClick={(e) => {
                          navigate("inventory/purchase");
                        }}
                        onAuxClick={(e) => {
                          // Handle middle mouse button click for browsers that support it
                          if (e.button === 1) {
                            window.open("/inventory/purchase", "_blank");
                          }
                        }}
                      />
                    </List.Item>
                    <List.Item
                      pl={"xs"}
                      icon={
                        <ThemeIcon
                          color="teal.6"
                          size={20}
                          radius="xl"
                          variant="outline"
                        >
                          <IconShoppingCartUp />
                        </ThemeIcon>
                      }
                    >
                      <NavLink
                        pl={"md"}
                        href="/inventory/purchase-invoice"
                        label={t("NewPurchase")}
                        component="button"
                        onClick={(e) => {
                          navigate("inventory/purchase-invoice");
                        }}
                        onAuxClick={(e) => {
                          // Handle middle mouse button click for browsers that support it
                          if (e.button === 1) {
                            window.open(
                              "/inventory/purchase-invoice",
                              "_blank"
                            );
                          }
                        }}
                      />
                    </List.Item>
                    <List.Item
                      pl={"xs"}
                      icon={
                        <ThemeIcon
                          color="teal.6"
                          size={20}
                          radius="xl"
                          variant="outline"
                        >
                          <IconList />
                        </ThemeIcon>
                      }
                    >
                      <NavLink
                        pl={"md"}
                        href="/inventory/invoice-batch"
                        label={t("InvoiceBatch")}
                        component="button"
                        onClick={(e) => {
                          navigate("inventory/invoice-batch");
                        }}
                        onAuxClick={(e) => {
                          // Handle middle mouse button click for browsers that support it
                          if (e.button === 1) {
                            window.open("/inventory/invoice-batch", "_blank");
                          }
                        }}
                      />
                    </List.Item>
                  </List>
                </Box>
              </Card>
            )}
          </SimpleGrid>
        </ScrollArea>
      </Container>
    </>
  );
}

export default MainDashboard;
