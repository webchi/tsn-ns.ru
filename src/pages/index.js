import * as React from "react"
import { FaChevronLeft, FaChevronRight, FaArrowRight, FaCaretRight } from 'react-icons/fa';
import { StaticImage } from "gatsby-plugin-image"

import Layout from '../components/layout';
import Navbar from "../components/navbar";

const IndexPage = () => {
    return (
        <Layout>
            <section class="hero is-info is-medium has-background">
                <StaticImage src="../images/soykino.jpg" alt="ТСН Новое Сойкино" placeholder="blurred" layout="fixed" className="hero-background is-transparent" />
                <div class="hero-head">
                    <Navbar />
                </div>

                <div class="hero-body">
                    <div class="container has-text-centered">
                        <div class="column is-6 is-offset-3">
                            <h1 class="title">
                                ТСН "Новое Сойкино"
                            </h1>
                        </div>
                    </div>
                </div>

            </section>
            <div className="container is-widescreen">
                <section className="section">
                    <h2 className="title is-4 is-spaced bd-anchor-title">
                        <a className="bd-anchor-link" href="#citizens"> # </a>
                        <span className="bd-anchor-name"> Жителям </span>
                    </h2>
                    <h3 class="subtitle">
                        Оплата комунальных служб
                    </h3>
                    <div className="columns is-multiline">
                        <div className="column is-3">
                            <div className="category">
                                <h1 className="title is-5">
                                    Электроэнергия
                                </h1>
                                <hr />
                                <ul>
                                    <li>
                                        <FaCaretRight className="icon-padding-right" size={12} />
                                        General Billing Overview
                                    </li>
                                    <li>
                                        <FaCaretRight className="icon-padding-right" size={12} />
                                        Changing the Account Owner
                                    </li>
                                    <li>
                                        <FaCaretRight className="icon-padding-right" size={12} />
                                        Downloading/Printing Your Invoices
                                    </li>
                                    <li>
                                        <FaCaretRight className="icon-padding-right" size={12} />
                                        Downloading/Printing Your Invoices
                                    </li>
                                    <li>
                                        <FaCaretRight className="icon-padding-right" size={12} />
                                        What to Do When Your Card is Declined
                                    </li>
                                </ul>
                                <h3 className="category-more">View All <FaArrowRight className="icon-padding-left" /></h3>
                            </div>
                        </div>
                        <div className="column is-3">
                            <div className="category">
                                <h1 className="title is-5">
                                    Вода и инфраструктура
                                </h1>
                                <hr />
                                <ul>
                                    <li>
                                        <FaCaretRight className="icon-padding-right" size={12} />
                                        Why Isn't My Custom Profile Data Showing on My Tickets?
                                    </li>
                                    <li>
                                        <FaCaretRight className="icon-padding-right" size={12} />
                                        Why Won't My Gmail SMTP Settings Work?
                                    </li>
                                    <li>
                                        <FaCaretRight className="icon-padding-right" size={12} />
                                        Is There a Customer Portal My Users Can Log in To?
                                    </li>
                                    <li>
                                        <FaCaretRight className="icon-padding-right" size={12} />
                                        How Do I Export My Contacts, Tickets, Reports?
                                    </li>
                                    <li>
                                        <FaCaretRight className="icon-padding-right" size={12} />
                                        How Do I Search for a Number?
                                    </li>
                                </ul>
                                <h3 className="category-more">View All <FaArrowRight className="icon-padding-left" /></h3>
                            </div>
                        </div>
                        <div className="column is-3">
                            <div className="category">
                                <h1 className="title is-5">
                                    Поставка газа
                                </h1>
                                <hr />
                                <ul>
                                    <li>
                                        <FaCaretRight className="icon-padding-right" size={12} />
                                        Creating a New Conversation
                                    </li>
                                    <li>
                                        <FaCaretRight className="icon-padding-right" size={12} />
                                        Assigning Conversations and Changing Status
                                    </li>
                                    <li>
                                        <FaCaretRight className="icon-padding-right" size={12} />
                                        Adding Internal Notes
                                    </li>
                                    <li>
                                        <FaCaretRight className="icon-padding-right" size={12} />
                                        Configuring Your Inbox View
                                    </li>
                                    <li>
                                        <FaCaretRight className="icon-padding-right" size={12} />
                                        Snoozing a Conversation
                                    </li>
                                </ul>
                                <h3 className="category-more">View All <FaArrowRight className="icon-padding-left" /></h3>
                            </div>
                        </div>
                        <div className="column is-3">
                            <div className="category">
                                <h1 className="title is-5">
                                    Твёрдые Бытовые Отходы
                                </h1>
                                <hr />
                                <ul>
                                    <li>
                                        <FaCaretRight className="icon-padding-right" size={12} />
                                        Understanding User Roles
                                    </li>
                                    <li>
                                        <FaCaretRight className="icon-padding-right" size={12} />
                                        Creating a Group
                                    </li>
                                    <li>
                                        <FaCaretRight className="icon-padding-right" size={12} />
                                        Editing the Role of a User
                                    </li>
                                </ul>
                                <h3 className="category-more">View All <FaArrowRight className="icon-padding-left" /></h3>
                            </div>
                        </div>
                    </div>
                </section>        
            </div>
        </Layout>
    )
}

export default IndexPage;
