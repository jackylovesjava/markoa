var Sequelize = require("sequelize");

/**
 * Session表
 */
exports.Sessions = {
    sid: {type: Sequelize.STRING(100), allowNull: false, unique: true},
    data: {type: Sequelize.TEXT}
}

/**
 * 用户表
 */
exports.Users = {
    uuid: {type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4},
    first_name: {type: Sequelize.STRING(32), allowNull: true},
    last_name: {type: Sequelize.STRING(32), allowNull: true},
    email: {type: Sequelize.STRING(50), allowNull: true, unique: true},
    image: {type: Sequelize.STRING(191), allowNull: true},
    image_public_id: {type: Sequelize.STRING(50), allowNull: true},
    status: {
        type: Sequelize.STRING(30),
        allowNull: false,
        defaultValue: 'Pending',
        validate: {isIn: [["Pending", "Active", "Deactivated"]]}
    },
    allows: {type: Sequelize.INTEGER, defaultValue: 1}, // 1 Contributor / 2 Editor / 3 Administrator
    public_email: {type: Sequelize.STRING(50), allowNull: true},
    twitter_id: {type: Sequelize.STRING(50), allowNull: true},
    social_profile: {type: Sequelize.STRING(50), allowNull: true},
    social_profile_user_id:{type: Sequelize.INTEGER, defaultValue: 0},
    instagram_name: {type: Sequelize.STRING(32), allowNull: true},
    facebook_url: {type: Sequelize.STRING(191), allowNull: true},
    google_url: {type: Sequelize.STRING(191), allowNull: true},
    linked_url: {type: Sequelize.STRING(191), allowNull: true},
    image_url: {type: Sequelize.STRING(191), allowNull: true},
    bio: {type: Sequelize.STRING(191), allowNull: true},
    notify_comment: {type: Sequelize.INTEGER, defaultValue: 1}, // 0 : Close, 1 : Open
    notify_published: {type: Sequelize.INTEGER, defaultValue: 1}, // 0 : Close, 1 : Open
    disable_public_profile: {type: Sequelize.INTEGER, defaultValue: 0}, // default: 0
    last_seen: {type: Sequelize.DATE, defaultValue: Sequelize.NOW},
    last_login: {type: Sequelize.DATE, defaultValue: Sequelize.NOW}
};


/**
 * 认证
 */
exports.Auths = {
    password: {type: Sequelize.STRING(100), allowNull: false},
    secret_key: {type: Sequelize.STRING(64), allowNull: true},
    need_two_step: {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false},
    user_id: {type: Sequelize.INTEGER, references: 'Users', referencesKey: 'id', allowNull: true}
};

/**
 * 文章表
 */
exports.Posts = {
    uuid: {type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4},
    category: {type: Sequelize.STRING(30), allowNull: true, defaultValue: 'news'},
    template: {type: Sequelize.STRING(30), allowNull: true, defaultValue: 'Standard'},
    review_score: {type: Sequelize.DECIMAL(10, 2), allowNull: true},
    title: {type: Sequelize.STRING(150), allowNull: false},
    title2: {type: Sequelize.STRING(150), allowNull: true},
    title3: {type: Sequelize.STRING(150), allowNull: true},
    click1: {type: Sequelize.INTEGER, defaultValue: 0},
    click2: {type: Sequelize.INTEGER, defaultValue: 0},
    click3: {type: Sequelize.INTEGER, defaultValue: 0},
    sub_title: {type: Sequelize.STRING(191), allowNull: true},
    banner_type: {
        type: Sequelize.STRING(30),
        allowNull: true,
        defaultValue: 'Image',
        validate: {isIn: [['', "Image", "Video"]]}
    },
    video_url: {type: Sequelize.STRING(191), allowNull: true},
    image_url: {type: Sequelize.STRING(191), allowNull: true},
    excerpt: {type: Sequelize.STRING(191), allowNull: true},
    slug: {type: Sequelize.STRING(150), allowNull: false, unique: true},
    markdown: {type: Sequelize.TEXT, allowNull: true},
    html: {type: Sequelize.TEXT, allowNull: true},
    featured: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
        validate: {isIn: [[0, 1, false, true]]}
    },
    status: {
        type: Sequelize.STRING(30),
        allowNull: true,
        defaultValue: 'Draft',
        validate: {isIn: [["Draft", "Pending_Review", "Published", "Editor_Locked", "Disabled"]]}
    },
    meta_title: {type: Sequelize.STRING(191), allowNull: true},
    meta_description: {type: Sequelize.STRING(191), allowNull: true},
    author_id: {type: Sequelize.INTEGER, references: 'Users', referencesKey: 'id', allowNull: true},
    created_at: {type: Sequelize.DATE, allowNull: true},
    created_by: {type: Sequelize.INTEGER, references: 'Users', referencesKey: 'id', allowNull: true},
    updated_at: {type: Sequelize.DATE, allowNull: true},
    updated_by: {type: Sequelize.INTEGER, references: 'Users', referencesKey: 'id', allowNull: true},
    published_at: {type: Sequelize.DATE, allowNull: true},
    published_by: {type: Sequelize.INTEGER, references: 'Users', referencesKey: 'id', allowNull: true},
    is_hidden : {type:Sequelize.INTEGER,defaultValue: 0}, // 0 : not hidden, 1 : hidden
    view_count: {type: Sequelize.INTEGER, defaultValue: 0},
    is_pushed : {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      validate: {isIn: [[0, 1, false, true]]}
    }, // 0 : not push, 1 : pushed
    pushed_at: {type: Sequelize.DATE, allowNull: true},
    win_at: {type: Sequelize.DATE, allowNull: true}
};

/**
 * 标签表
 */
exports.PublishTimers = {
    post_id: {type: Sequelize.INTEGER, references: 'Posts', referencesKey: 'id', allowNull: true, unique: true},
    created_by: {type: Sequelize.INTEGER, references: 'Users', referencesKey: 'id', allowNull: true},
    published_at: {type: Sequelize.DATE, allowNull: true},
    published_by: {type: Sequelize.INTEGER, references: 'Users', referencesKey: 'id', allowNull: true}
};

/**
 * 标签表
 */
exports.PostExtends = {
    share_count: {type: Sequelize.INTEGER, defaultValue: 0, allowNull: false},
    like_count: {type: Sequelize.INTEGER, defaultValue: 0, allowNull: false},
    comment_count: {type: Sequelize.INTEGER, defaultValue: 0, allowNull: false},
    post_id: {type: Sequelize.INTEGER, references: 'Posts', referencesKey: 'id', allowNull: false, unique: true}
};

/**
 * Feature表
 */
exports.FeaturePosts = {
    flag: {type: Sequelize.STRING(10), allowNull: false},
    background_colour: {type: Sequelize.STRING(10), allowNull: true},
    post_id: {type: Sequelize.INTEGER, references: 'Posts', referencesKey: 'id', allowNull: true}
};

/**
 * 标签表
 */
exports.Tags = {
    uuid: {type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4},
    name: {type: Sequelize.STRING(150), allowNull: false, unique: true},
    color: {type: Sequelize.STRING(20), allowNull: true},
    slug: {type: Sequelize.STRING(150), allowNull: false, unique: true},
    description: {type: Sequelize.STRING(191), allowNull: true},
    image: {type: Sequelize.STRING(191), allowNull: true},
    hidden: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        validate: {isIn: [[0, 1, false, true]]}
    },
    parent_id: {type: Sequelize.INTEGER, references: 'Tags', referencesKey: 'id', allowNull: true},
    meta_title: {type: Sequelize.STRING(191), allowNull: true},
    meta_description: {type: Sequelize.STRING(191), allowNull: true}
};

/**
 * 文章-标签中间表
 */
exports.PostsTags = {
    post_id: {type: Sequelize.INTEGER, references: 'Posts', referencesKey: 'id', allowNull: true},
    tag_id: {type: Sequelize.INTEGER, references: 'Tags', referencesKey: 'id', allowNull: true}
};

/**
 * Vias
 */
exports.Vias = {
    name: {type: Sequelize.STRING(100), allowNull: false},
    url: {type: Sequelize.STRING(191), allowNull: false},
    post_id: {type: Sequelize.INTEGER, references: 'Posts', referencesKey: 'id', allowNull: true}
};

/**
 * Sources
 */
exports.Sources = {
    name: {type: Sequelize.STRING(100), allowNull: false},
    url: {type: Sequelize.STRING(191), allowNull: false},
    post_id: {type: Sequelize.INTEGER, references: 'Posts', referencesKey: 'id', allowNull: true}
};

/**
 * 评论表
 */
exports.Comments = {
    uuid: {type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4},
    description: {type: Sequelize.STRING(3000), allowNull: true},
    hidden: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        validate: {isIn: [[0, 1, false, true]]}
    },
    parent_id: {type: Sequelize.INTEGER, allowNull: true},
    post_id: {type: Sequelize.INTEGER, references: 'Posts', referencesKey: 'id', allowNull: false},
    dr_id: {type: Sequelize.INTEGER, allowNull: false},
    like_count: {type: Sequelize.INTEGER, allowNull: false, defaultValue: 0},
    level: {type: Sequelize.INTEGER, allowNull: false, defaultValue: 1},
    is_deleted: {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false},
    is_edited: {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false}
};

/**
 * like表
 * @type {{dr_id: {type: INTEGER, allowNull: boolean}, comment_id: {type: INTEGER, references: string, referencesKey: string, allowNull: boolean}}}
 */
exports.Likes = {
    dr_id: {type: Sequelize.INTEGER, allowNull: false},
    comment_id: {type: Sequelize.INTEGER, references: 'Comments', referencesKey: 'id', allowNull: false}
};

/**
 * ChangeLog 表
 *
 * **/
exports.ChangeLog = {
    uuid: {type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4},
    post_id: {type: Sequelize.INTEGER, references: 'Posts', referencesKey: 'id', allowNull: false},
    from_status: {
        type: Sequelize.STRING(30),
        allowNull: true,
        defaultValue: 'Draft',
        validate: {isIn: [["Draft", "Pending_Review", "Published", "Editor_Locked", "Disabled"]]}
    },
    to_status: {
        type: Sequelize.STRING(30),
        allowNull: true,
        defaultValue: 'Draft',
        validate: {isIn: [["Draft", "Pending_Review", "Published", "Editor_Locked", "Disabled"]]}
    },
    updated_at: {type: Sequelize.DATE, allowNull: true},
    updated_by: {type: Sequelize.INTEGER, references: 'Users', referencesKey: 'id', allowNull: true}
};



exports.TVComments = {
    uuid: {type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4},
    content: {type: Sequelize.STRING(3000), allowNull: true},
    hidden: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        validate: {isIn: [[0, 1, false, true]]}
    },
    parent_id: {type: Sequelize.INTEGER, allowNull: true},
    video_id: {type: Sequelize.STRING(100), allowNull: false},
    dr_id: {type: Sequelize.INTEGER, allowNull: false},
    flag_count: {type: Sequelize.INTEGER, allowNull: false, defaultValue: 0},
    like_count: {type: Sequelize.INTEGER, allowNull: false, defaultValue: 0},
    is_deleted: {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false},
    is_edited: {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false}
};


exports.RelatedDigitalrevProducts = {
    video_id: {type: Sequelize.STRING(100), allowNull: false},
    product_id: {type: Sequelize.INTEGER, allowNull: false},
    product_url: {type: Sequelize.STRING(1000), allowNull: false}
};

exports.RelatedAmazonProducts = {
    video_id: {type: Sequelize.STRING(100), allowNull: false},
    us_product_id: {type: Sequelize.STRING(100), allowNull: true},
    us_product_url: {type: Sequelize.STRING(1000), allowNull: true},
    uk_product_id: {type: Sequelize.STRING(100), allowNull: true},
    uk_product_url: {type: Sequelize.STRING(1000), allowNull: true}
};

/**
 * 关联文章表
 **/
exports.RelatedArticles = {
    video_id: {type: Sequelize.STRING(100), allowNull: false},
    article_id: {type: Sequelize.INTEGER, allowNull: false}
};
