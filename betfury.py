from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from time import sleep
import time
from settings import *
from discord_webhook import DiscordWebhook, DiscordEmbed
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import StaleElementReferenceException
from pynput.mouse import Button, Controller
from decimal import Decimal
import requests
import keyboard


# ------------------------------------------------------
#                 STARTUP SEQUENCE
# ------------------------------------------------------
print("Starting Bot")
options = Options()
#options.add_argument('--headless')
#options.add_argument('--no-sandbox')
unpacked_extension_path = folder_path
options.add_argument('--load-extension={}'.format(unpacked_extension_path))
options.add_argument('--disable-gpu')
browser = webdriver.Chrome(options=options)  # see edit for recent code change.
#browser = webdriver.Chrome()
browser.implicitly_wait(20)
url = "https://betfury.io/dapps/dice"
browser.get(url)
browser.maximize_window()

print("Starting Login Process")

sleep(2)

mouse = Controller()

def login():
    mouse.position = (1797, 56)
    mouse.press(Button.left)
    mouse.release(Button.left)
    sleep(1.5)

    mouse.position = (1547, 633)
    mouse.press(Button.left)
    mouse.release(Button.left)
    sleep(0.5)

    mouse.position = (1512, 299)
    sleep(0.5)
    mouse.press(Button.left)
    mouse.release(Button.left)

    keyboard.write(password)

    sleep(0.25)

    mouse.position = (1498, 410)
    sleep(0.25)
    mouse.press(Button.left)
    mouse.release(Button.left)

    keyboard.write(password)

    sleep(0.25)
    mouse.position = (1612, 491)
    mouse.press(Button.left)
    mouse.release(Button.left)

    sleep(0.25)
    mouse.position = (1640, 419)
    mouse.press(Button.left)
    mouse.release(Button.left)

    sleep(0.5)
    mouse.position = (1501, 301)
    mouse.press(Button.left)
    mouse.release(Button.left)
    keyboard.write(account_name)

    sleep(0.5)
    mouse.position = (1622, 460)
    mouse.press(Button.left)
    mouse.release(Button.left)

    sleep(0.5)
    mouse.position = (1519, 201)
    mouse.press(Button.left)
    mouse.release(Button.left)

    sleep(1.5)
    mouse.position = (1503, 211)
    mouse.press(Button.left)
    mouse.release(Button.left)
    keyboard.write(private_key)

    sleep(1.5)
    mouse.position = (1631, 361)
    mouse.press(Button.left)
    mouse.release(Button.left)

    #close Extension
    sleep(2)
    mouse.position = (1800, 51)
    mouse.press(Button.left)
    mouse.release(Button.left)
    sleep(4)

    #Login
    sleep(3)
    mouse.position = (1730, 153)
    mouse.press(Button.left)
    mouse.release(Button.left)

    sleep(3)
    mouse.position = (1255, 404)
    mouse.press(Button.left)
    mouse.release(Button.left)

    sleep(3)
    mouse.position = (281, 533)
    mouse.press(Button.left)
    mouse.release(Button.left)

    #Move to Game

    sleep(1)
    mouse.position = (337, 148)
    mouse.press(Button.left)
    mouse.release(Button.left)


    sleep(0.5)
    mouse.position = (965, 561)
    mouse.press(Button.left)
    mouse.release(Button.left)

    sleep(1.5)
    #open My bets
    mouse.position = (759, 892)
    mouse.press(Button.left)
    mouse.release(Button.left)

    #set odds
    mouse.position = (836, 627)
    mouse.press(Button.left)
    mouse.release(Button.left)

def check_balance():
    balance_check = browser.find_element_by_xpath(
        '//*[@id="app"]/div[2]/div/div/nav/div[2]/div[1]/div/div[1]/div/span/span')
    balance_text = balance_check.text
    balance2 = balance_text.replace(" ", "")
    balance = Decimal(balance2)
    btc_price = requests.get(url='https://api.coinbase.com/v2/prices/BTC-USD/buy').json()['data'][
        'amount']
    balance_usd = float(balance) * float(btc_price)
    profit = (float(balance) - start_balance) * float(btc_price)
    print("Current Profit: $", profit)
    profit_btc = (float(balance) - start_balance)
    percent = (profit_btc / start_balance) * 100
    print("Current Percent Gain: ", percent, "%")


    WEBHOOK_URL = discordwebhook
    webhook = DiscordWebhook(url=WEBHOOK_URL)
    # create embed object for webhook
    embed = DiscordEmbed(title='BetFury Dice Bot Beta', description='View Latest Stats Below', color=242424)
    # set timestamp (default is now)
    embed.set_timestamp()
    # add fields to embed
    embed.add_embed_field(name='Current Balance BTC:', value=str(balance))
    embed.add_embed_field(name='Current Balance USD:', value=str(balance_usd))
    embed.add_embed_field(name='Total Profit $', value=str(profit))
    embed.add_embed_field(name='Total Profit %', value=str(percent))
    #embed.add_embed_field(name='Get the DicBot for Free Here:', value='no link yet :(')
    embed.add_embed_field(name='Make Bets On BetFury Here:', value='https://betfury.io/?r=5dbf4b990e74c14e9116b67e')
    # add embed object to webhook
    webhook.add_embed(embed)
    response = webhook.execute()

    if float(balance) > withdraw_at:
        withdraw(balance)
    else:
        pass

def withdraw(balance):
    print("PROFIT TAKING ACHIEVED, Making 500 TRX Withdrawl")

    try:
        WEBHOOK_URL = discordwebhook
        webhook = DiscordWebhook(url=WEBHOOK_URL)
        # create embed object for webhook
        embed = DiscordEmbed(title='BetFury Dice Bot Beta', description='View Latest Stats Below', color=242424)
        # set timestamp (default is now)
        embed.set_timestamp()
        # add fields to embed
        embed.add_embed_field(name='Amount Withdrawn', value=str(withdraw_amount))
        embed.add_embed_field(name='Make Bets On BetFury Here:', value='https://betfury.io/?r=5dbf4b990e74c14e9116b67e')
        # add embed object to webhook
        webhook.add_embed(embed)
        response = webhook.execute()
    except Exception as e:
        print(e)
        pass

    mouse.position = (1562, 133)
    mouse.press(Button.left)
    mouse.release(Button.left)

    sleep(7)
    #Wallet input press then input
    mouse.position = (842, 621)
    mouse.press(Button.left)
    mouse.release(Button.left)

    mouse.position = (842, 621)
    mouse.press(Button.left)
    mouse.release(Button.left)

    keyboard.write(wallet_address)

    sleep(1)

    #withdraw amount
    mouse.position = (860, 737)
    mouse.press(Button.left)
    mouse.release(Button.left)

    keyboard.write(str(withdraw_amount))
    sleep(1)
    #withdraw button
    mouse.position = (976, 833)
    mouse.press(Button.left)
    mouse.release(Button.left)

    sleep(12)

def refresh():
    print("REFRESHING TO MAKE SURE PERFORMANCE HOLDS UP LONG TERM")
    mouse.position = (82, 51)
    mouse.press(Button.left)
    mouse.release(Button.left)
    sleep(8)

    mouse.position = (761, 879)
    mouse.press(Button.left)
    mouse.release(Button.left)
    sleep(2)

    mouse.position = (836, 627)
    mouse.press(Button.left)
    mouse.release(Button.left)
    sleep(1)

    count = 0

    return count

def increase_bet():
    print("Increasing Bet Value")
    mouse.position = (821, 734)
    mouse.press(Button.left)
    mouse.release(Button.left)
    sleep(0.30)

def decrease_bet():
    print("Decreasing Bet Value")
    mouse.position = (824, 704)
    mouse.press(Button.left)
    mouse.release(Button.left)
    sleep(0.25)

def reset_bet():
    print("Resetting Bet")
    mouse.position = (566, 702)
    mouse.press(Button.left)
    mouse.release(Button.left)
    sleep(0.25)

def bet():
    print("Placing Bet")
    mouse.position = (1035, 705)
    mouse.press(Button.left)
    mouse.release(Button.left)
    sleep(4.8)





def furybot():

    print("GNOMES ARE REAL :D")
    under_over = True

    try:
        count = 0
        while True:
            print("Checking Tables")

            mouse.position = (763, 878)
            mouse.press(Button.left)
            mouse.release(Button.left)
            sleep(0.5)

            last_bet_path = browser.find_element_by_xpath('//*[@id="app"]/div[3]/div[2]/div[1]/div/div/div[2]/div[2]/div[2]/div[1]/div[5]/div/div/span')
            sleep(0.15)
            last_bet_text = last_bet_path.text
            last_bet = Decimal(last_bet_text)

            last_bet_path2 = browser.find_element_by_xpath('//*[@id="app"]/div[3]/div[2]/div[1]/div/div/div[2]/div[2]/div[2]/div[2]/div[5]/div/div/span')
            sleep(0.15)
            last_bet_text2 = last_bet_path2.text
            last_bet2 = Decimal(last_bet_text2)


            last_bet_path3 = browser.find_element_by_xpath('//*[@id="app"]/div[3]/div[2]/div[1]/div/div/div[2]/div[2]/div[2]/div[3]/div[5]/div/div/span')
            sleep(0.15)
            last_bet_text3 = last_bet_path3.text
            last_bet3 = Decimal(last_bet_text3)

            last_bet_path4 = browser.find_element_by_xpath('//*[@id="app"]/div[3]/div[2]/div[1]/div/div/div[2]/div[2]/div[2]/div[4]/div[5]/div/div/span')
            sleep(0.15)
            last_bet_text4 = last_bet_path4.text
            last_bet4 = Decimal(last_bet_text4)


            last_bet_path5 = browser.find_element_by_xpath('//*[@id="app"]/div[3]/div[2]/div[1]/div/div/div[2]/div[2]/div[2]/div[5]/div[5]/div/div/span')
            sleep(0.15)
            last_bet_text5 = last_bet_path5.text
            last_bet5 = Decimal(last_bet_text5)

            balance_check = browser.find_element_by_xpath('//*[@id="app"]/div[2]/div/div/nav/div[2]/div[1]/div/div[1]/div/span/span')
            balance_text = balance_check.text
            balance2 = balance_text.replace(" ", "")
            balance = Decimal(balance2)


            if last_bet > 0:
                bet_1 = True
            else:
                bet_1 = False
            if last_bet2 > 0:
                bet_2 = True
            else:
                bet_2 = False
            if last_bet3 > 0:
                bet_3 = True
            else:
                bet_3 = False
            if last_bet4 > 0:
                bet_4 = True
            else:
                bet_4 = False

            if last_bet5 > 0:
                bet_5 = True
            else:
                bet_5 = False


            if balance < 0.0000005:
                WEBHOOK_URL = discordwebhook
                webhook = DiscordWebhook(WEBHOOK_URL)
                webhook.set_content(content='***BOT BUSTED STOPPING BOT***', description=str(balance))
                webhook.send()

                exit()

            if bet_1 == False and bet_2 == False and bet_3 == False and bet_4 == True:

                print("Three Bets Lost")
                increase_bet()
                bet()


            elif bet_1 == False and bet_2 == False and bet_3 == False and bet_4 == False and bet_5 == True:
                print("Four Bets Lost, Increasing Bet size 2x.")
                bet_value_path = browser.find_element_by_xpath('//*[@id="app"]/div[3]/div[2]/div[1]/div/div/div[2]/div[2]/div[2]/div[1]/div[3]/div/div')
                bet_value_text = bet_value_path.text
                bet_value = float(bet_value_text)

                switcher = True
                if switcher == True:
                    if bet_value > 0.000001:
                        print("Changing Under/Over")
                        if under_over == True:
                            print("Switching to Roll Over")
                            mouse.position = (1049, 552)
                            mouse.press(Button.left)
                            mouse.release(Button.left)
                            sleep(0.25)
                            mouse.position = (902, 615)
                            mouse.press(Button.left)
                            mouse.release(Button.left)
                            under_over = False
                        elif under_over == False:
                            mouse.position = (619, 552)
                            mouse.press(Button.left)
                            mouse.release(Button.left)
                            sleep(0.25)
                            mouse.position = (836, 627)
                            mouse.press(Button.left)
                            mouse.release(Button.left)
                            under_over = True
                else:
                    pass


                increase_bet()
                increase_bet()
                bet()

            elif bet_1 == False and bet_2 == False and bet_3 == False and bet_4 == False and bet_5 == False:
                print("Five Bets Lost, Increasing Bet size 1x.")
                bet_value_path = browser.find_element_by_xpath('//*[@id="app"]/div[3]/div[2]/div[1]/div/div/div[2]/div[2]/div[2]/div[1]/div[3]/div/div')
                bet_value_text = bet_value_path.text
                bet_value = float(bet_value_text)

                switcher = True
                if switcher == True:
                    if bet_value > 0.000001:
                        print("Changing Under/Over")
                        if under_over == True:
                            print("Switching to Roll Over")
                            mouse.position = (1049, 552)
                            mouse.press(Button.left)
                            mouse.release(Button.left)
                            sleep(0.25)
                            mouse.position = (902, 615)
                            mouse.press(Button.left)
                            mouse.release(Button.left)
                            under_over = False
                        elif under_over == False:
                            mouse.position = (619, 552)
                            mouse.press(Button.left)
                            mouse.release(Button.left)
                            sleep(0.25)
                            mouse.position = (836, 627)
                            mouse.press(Button.left)
                            mouse.release(Button.left)
                            under_over = True
                else:
                    pass


                increase_bet()
                bet()


            else:

                if count < 50:
                    print("Loop Number", count)
                    count += 1
                else:
                    count = refresh()
                    check_balance()



                reset_bet()

                # amunt of times to increas base bet
                for _ in range(double_times):
                    increase_bet()

                bet()





    except ValueError as value_error:
        print(value_error)
        sleep(5)
        furybot()
    except NoSuchElementException as no_element:
        print(no_element)
        sleep(5)
        furybot()
    except StaleElementReferenceException as stale_element:
        print(stale_element)
        sleep(5)
        furybot()
    except AttributeError as attribute_error:
        print(attribute_error)
        sleep(5)
        furybot()
    except TypeError as type_error:
        print(type_error)
        sleep(5)
        furybot()
    except Exception as e:
        sleep()
        refresh()
        furybot()




def start(question):
    reply = str(input(question)).lower().strip()
    print(reply)
    if reply == 'start':
        furybot()
    if reply == 'exit':
        exit()
    else:
        print("Uhhhh... please enter start only or exit to quit... ")
        print("Type Start to start bot: ")

#start("Type Start to start bot: ")
login()
furybot()